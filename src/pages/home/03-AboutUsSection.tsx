// ───────────────────────────────────────────────────────────────────────────────
// src/pages/home/sections/AboutUsSection.tsx
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ceoPortrait from "@/assets/portrait/ceo-portrait.jpg";
import { useTranslation } from "react-i18next";
import { motion, useReducedMotion, type Variants } from "framer-motion";

// Types for the i18n block (optional but nice for TS)
type AboutSectionI18n = {
  tagline: string;
  heading: string;
  intro: string;
  ctaLabel: string;
  ceo: {
    name: string;
    title: string;
    bio: string;
    videoHeading: string;
    videoUrl: string;
    videoTitle: string;
  };
};

// ── Inline Motion helpers (slower, smooth) ────────────────────────────────────
const EASE_OUT: readonly [number, number, number, number] = [0.25, 1, 0.3, 1];
const containerStagger = (stagger = 0.2, delayChildren = 0.12): Variants => ({
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: stagger, delayChildren, when: "beforeChildren" } },
});
const fadeUp = (delay = 0, distance = 22, duration = 1.0): Variants => ({
  hidden: { opacity: 0, y: distance, filter: "blur(2px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration, ease: EASE_OUT, delay } },
});
const hoverLift = {
  whileHover: { y: -6, scale: 1.02 },
  whileTap: { scale: 0.98 },
  transition: { type: "spring", stiffness: 160, damping: 18 },
};

const AboutUsSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  const reduce = useReducedMotion();

  const content = t("aboutSection", { returnObjects: true }) as AboutSectionI18n;

  return (
    <section
      id="about-us"
      aria-labelledby="about-us-heading"
      className="section-padding bg-spring-wood text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100"
      dir={isAr ? "rtl" : "ltr"}
    >
      <motion.div
        className="container-width grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr]"
        variants={containerStagger(0.2, 0.15)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: reduce ? 0 : 0.2 }}
      >
        {/* Left: CEO card */}
        <motion.figure
          variants={fadeUp(0, 22, 1.0)}
          className={`relative mx-auto max-w-sm ${isAr ? "lg:mx-auto" : "lg:mx-0"}`}
        >
          <motion.img
            src={ceoPortrait}
            alt={`${content.ceo.name}, ${content.ceo.title}`}
            className="h-auto w-full rounded-2xl object-cover shadow-2xl"
            loading="lazy"
            decoding="async"
            {...(!reduce ? hoverLift : {})}
          />

          {/* Speech / bio card */}
          <motion.figcaption
            variants={fadeUp(0.1, 18, 1.0)}
            className="relative mt-6 rounded-2xl bg-primary p-6 text-white shadow-lg"
          >
            <span
              aria-hidden="true"
              className={`absolute bottom-8 hidden h-6 w-6 rotate-45 rounded-sm bg-primary shadow-md md:block ${
                isAr ? "-right-3" : "-left-3"
              }`}
            />
            <p className="text-sm leading-relaxed opacity-95">{content.ceo.bio}</p>
            <div className="mt-4">
              <p className="font-bold tracking-wide">{content.ceo.name}</p>
              <p className="text-sm text-white/90">{content.ceo.title}</p>
            </div>
          </motion.figcaption>
        </motion.figure>

        {/* Right: Copy + video */}
        <div className="flex flex-col gap-8">
          {/* Intro block */}
          <motion.div variants={fadeUp(0.05, 18, 1.0)} className={isAr ? "text-right" : ""}>
            <p className="mb-3 font-semibold uppercase tracking-wider text-primary">{content.tagline}</p>
            <h2 id="about-us-heading" className="mb-5 font-heading text-3xl font-bold md:text-4xl">
              {content.heading}
            </h2>

            <div className={`mb-6 border-primary pl-4 ${isAr ? "border-r-4 pr-4 pl-0" : "border-l-4"}`}>
              <p className="leading-relaxed text-boulder dark:text-zinc-400">{content.intro}</p>
            </div>

            <motion.div {...(!reduce ? hoverLift : {})} className={isAr ? "inline-flex" : "inline-flex"}>
              <Button asChild className="btn-secondary">
                <Link to="/about" aria-label={content.ctaLabel}>
                  {content.ctaLabel}
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* CEO message video */}
          <motion.div variants={fadeUp(0.1, 18, 1.0)} className={isAr ? "text-right" : ""}>
            <h3 className="mb-4 font-heading text-xl font-bold">{content.ceo.videoHeading}</h3>
            <div className="aspect-video overflow-hidden rounded-xl shadow-lg ring-1 ring-black/5 dark:ring-white/5">
              <iframe
                className="h-full w-full"
                src={content.ceo.videoUrl}
                title={content.ceo.videoTitle}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutUsSection;
