import { useEffect } from "react";
import { motion } from "framer-motion";
import LionHeartSVG from "@/assets/LionHeartSVG.svg";
import LionLogoSVG from "@/assets/LionLogoSVG.svg";

type PreloaderProps = {
  onDone?: () => void;
  /** How long to show the preloader before resolving (ms) */
  durationMs?: number;
};

const Preloader = ({ onDone, durationMs = 1600 }: PreloaderProps) => {
  // Tell the parent we're done after the configured duration.
  useEffect(() => {
    const timer = setTimeout(() => onDone?.(), durationMs);
    return () => clearTimeout(timer);
  }, [onDone, durationMs]);

  return (
    <motion.div
      key="preloader-root"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
    >
      {/* subtle background flourish */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[420px] w-[420px] rounded-full blur-3xl bg-primary/10" />
      </div>

      <div
        className="relative mx-auto w-full max-w-[420px] px-6 text-center"
        role="status"
        aria-live="polite"
      >
        {/* Animated Mark */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex items-center justify-center"
        >
          <motion.div
            animate={{ scale: [1, 1.06, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="relative grid place-items-center rounded-3xl ring-1 ring-primary/15 bg-muted/30 dark:bg-white/5 backdrop-blur-sm p-6"
          >
            <img
              src={LionLogoSVG}
              alt="Lion mark"
              className="h-20 w-auto md:h-24 lg:h-28 object-contain"
              draggable={false}
            />
          </motion.div>
        </motion.div>

        {/* Wordmark */}
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.45 }}
          className="mb-4"
        >
          <img
            src={LionHeartSVG}
            alt="LionHeart"
            className="h-6 w-auto md:h-7 lg:h-8 mx-auto object-contain"
            draggable={false}
          />
        </motion.div>

        {/* Loading bar */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 220, opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.45 }}
          className="h-1.5 bg-muted rounded-full mx-auto overflow-hidden"
        >
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            className="h-full w-1/3 bg-gradient-to-r from-primary via-primary/70 to-accent"
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.4 }}
          className="mt-4 text-xs md:text-sm text-muted-foreground"
        >
          Enterprise IT Solutions
        </motion.p>

        {/* Respect reduced motion */}
        <style>
          {`
            @media (prefers-reduced-motion: reduce) {
              [data-reduce-motion] * {
                animation: none !important;
                transition: none !important;
              }
            }
          `}
        </style>
      </div>
    </motion.div>
  );
};

export default Preloader;
