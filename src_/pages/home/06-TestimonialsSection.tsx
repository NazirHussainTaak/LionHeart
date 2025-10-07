// ───────────────────────────────────────────────────────────────────────────────
// src/pages/home/sections/TestimonialsSection.tsx
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import macomaImage from "@/assets/testimonials/macomaImage.jpg";
import alnoorImage from "@/assets/testimonials/alnoormage.jpg";
import bluewaveImage from "@/assets/testimonials/bluewaveImage.jpg";
import { useTranslation } from "react-i18next";
import { motion, useReducedMotion, type Variants } from "framer-motion";

// ── Inline motion helpers (smooth & slow) ──────────────────────────────────────
const EASE_OUT: readonly [number, number, number, number] = [0.25, 1, 0.3, 1];
const containerStagger = (stagger = 0.2, delayChildren = 0.15): Variants => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: stagger, delayChildren, when: "beforeChildren" },
  },
});
const fadeUp = (delay = 0, distance = 22, duration = 1.0): Variants => ({
  hidden: { opacity: 0, y: distance, filter: "blur(2px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration, ease: EASE_OUT, delay },
  },
});

type TestimonialI18n = {
  id: "macoma" | "al-noor" | "bluewave";
  quote: string;
  company: string;
  location: string;
};

const IMG_MAP: Record<string, string> = {
  macoma: macomaImage,
  "al-noor": alnoorImage,
  bluewave: bluewaveImage,
};

const TestimonialCard: React.FC<
  TestimonialI18n & { badge: string; bannerAltTmpl: string; avatarAltTmpl: string }
> = ({ quote, company, location, id, badge, bannerAltTmpl, avatarAltTmpl }) => (
  <motion.div variants={fadeUp(0, 20, 1.0)}>
    <Card className="card-elevated overflow-hidden rounded-3xl border bg-white text-neutral-900 shadow-sm transition-shadow hover:shadow-md dark:border-white/10 dark:bg-neutral-900 dark:text-neutral-100">
      {/* Banner image */}
      <div className="relative h-56 md:h-72 select-none">
        <img
          src={IMG_MAP[id]}
          alt={bannerAltTmpl.replace("{{company}}", company)}
          className="h-full w-full object-cover"
          loading="lazy"
          draggable={false}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"
        />
        <div className="absolute left-6 bottom-6">
          <p className="mb-1 text-[11px] uppercase tracking-widest text-white/80">{badge}</p>
          <h3 className="font-heading text-2xl font-extrabold text-white drop-shadow md:text-3xl">
            {company}
          </h3>
          <div className="mt-2 h-0.5 w-14 bg-white/80" />
        </div>
      </div>

      {/* Body */}
      <CardContent className="p-6 md:p-8">
        <p className="mb-6 italic leading-relaxed text-boulder dark:text-zinc-300">“{quote}”</p>
        <div className="flex items-center gap-3">
          <img
            src={IMG_MAP[id]}
            alt={avatarAltTmpl.replace("{{company}}", company)}
            className="h-12 w-12 rounded-full object-cover ring-4 ring-spring-wood/80 dark:ring-neutral-800 select-none"
            loading="lazy"
            draggable={false}
          />
          <div>
            <div className="font-heading font-bold">{company}</div>
            <div className="text-sm text-sorrell-brown dark:text-zinc-400">{location}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

const TestimonialsSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  const reduce = useReducedMotion();

  const heading = t("testimonials.heading");
  const subheading = t("testimonials.subheading");
  const badge = t("testimonials.badge");
  const bannerAlt = t("testimonials.bannerAlt");
  const avatarAlt = t("testimonials.avatarAlt");
  const items = t("testimonials.items", { returnObjects: true }) as TestimonialI18n[];

  const [api, setApi] = useState<CarouselApi | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  useEffect(() => {
    if (!api) return;
    const update = () => {
      setScrollSnaps(api.scrollSnapList());
      setSelectedIndex(api.selectedScrollSnap());
    };
    update();
    api.on("select", update);
    api.on("reInit", update);
    return () => {
      api.off("select", update);
      api.off("reInit", update);
    };
  }, [api]);

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="section-padding bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100"
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="container-width">
        {/* Header */}
        <motion.div
          variants={fadeUp(0, 18, 1.0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: reduce ? 0 : 0.25 }}
          className="mb-16 text-center"
        >
          <h2
            id="testimonials-heading"
            className="mb-4 font-heading text-3xl font-bold md:text-4xl"
          >
            {heading}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-boulder dark:text-zinc-400">
            {subheading}
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          variants={containerStagger(0.25, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: reduce ? 0 : 0.25 }}
          className="relative mx-auto max-w-[820px] touch-pan-y"
        >
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              loop: true,
              align: "start",
              direction: isAr ? "rtl" : "ltr",
              slidesToScroll: 1,
            }}
            aria-roledescription="carousel"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {items.map((it) => (
                <CarouselItem key={it.id} className="pl-2 md:pl-4 basis-full">
                  <TestimonialCard
                    {...it}
                    badge={badge}
                    bannerAltTmpl={bannerAlt}
                    avatarAltTmpl={avatarAlt}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="hidden md:flex bg-white/90 backdrop-blur border border-spring-wood shadow hover:bg-white dark:border-white/10 dark:bg-neutral-900/90 dark:hover:bg-neutral-900" />
            <CarouselNext className="hidden md:flex bg-white/90 backdrop-blur border border-spring-wood shadow hover:bg-white dark:border-white/10 dark:bg-neutral-900/90 dark:hover:bg-neutral-900" />
          </Carousel>

          {/* Dots */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {scrollSnaps.map((_, i) => {
              const isActive = i === selectedIndex;
              return (
                <button
                  key={`dot-${i}`}
                  onClick={() => api?.scrollTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={isActive ? "true" : undefined}
                  className={[
                    "h-2.5 rounded-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60",
                    isActive
                      ? "w-8 bg-primary"
                      : "w-2.5 bg-sorrell-brown/30 hover:bg-sorrell-brown/50 dark:bg-zinc-600/40 dark:hover:bg-zinc-500/60",
                  ].join(" ")}
                />
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
