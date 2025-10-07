// ───────────────────────────────────────────────────────────────────────────────
// src/pages/home/sections/LeadershipSection.tsx
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import ceoPortrait from "@/assets/portrait/ceo-portrait.jpg";
import cooPortrait from "@/assets/portrait/coo-portrait.jpg";
import mhPortrait from "@/assets/portrait/mh-portrait.jpg";
import ctoPortrait from "@/assets/portrait/cto-portrait.jpg";
import { useTranslation } from "react-i18next";
import { motion, useReducedMotion, type Variants } from "framer-motion";

// ── Inline motion helpers (smooth & slow) ───────────────────────────────────────
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
const hoverLift = {
  whileHover: { y: -6, scale: 1.02 },
  whileTap: { scale: 0.98 },
  transition: { type: "spring" as any, stiffness: 160, damping: 18 },
};

// ── Types & assets ─────────────────────────────────────────────────────────────
type LeaderI18n = {
  id: "ceo" | "coo" | "cto" | "sales";
  name: string;
  title: string;
  email: string;
  phone: string;
  blurb: string;
};

const IMG_MAP: Record<string, string> = {
  ceo: ceoPortrait,
  coo: cooPortrait,
  cto: ctoPortrait,
  sales: mhPortrait,
};

const telHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, "")}`;

// ── Card Component ─────────────────────────────────────────────────────────────
const LeaderCard: React.FC<LeaderI18n & { reduce?: boolean }> = ({
  id,
  name,
  title,
  email,
  phone,
  blurb,
  reduce,
}) => (
  <motion.div variants={fadeUp(0, 22, 1.0)} {...(!reduce ? hoverLift : {})} className="h-full">
    <Card className="card-elevated text-center bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100 transition-shadow hover:shadow-md h-full">
      <CardContent className="pt-8 flex flex-col items-center h-full">
        <div className="relative mb-6">
          <img
            src={IMG_MAP[id]}
            alt={`${name}, ${title}`}
            className="mx-auto h-32 w-32 rounded-full object-cover ring-2 ring-black/5 dark:ring-white/10"
            loading="lazy"
          />
        </div>

        <h3 className="mb-1 font-heading text-xl font-bold inline-block">{name}</h3>
        <p className="mb-4 font-medium text-primary inline-block">{title}</p>

        <p className="text-boulder text-sm leading-relaxed dark:text-zinc-400 flex-grow">
          {blurb}
        </p>

        <div className="mt-4 space-y-1 text-sm">
          <div>
            <a
              href={`mailto:${email}`}
              className="rounded underline-offset-4 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
              aria-label={`Email ${name}`}
            >
              {email}
            </a>
          </div>
          <div>
            <a
              href={telHref(phone)}
              className="rounded underline-offset-4 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
              aria-label={`Call ${name}`}
            >
              {phone}
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

// ── Section Component ─────────────────────────────────────────────────────────
const LeadershipSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  const reduce = useReducedMotion();

  const heading = t("leadership.heading");
  const subheading = t("leadership.subheading");
  const leaders = t("leadership.items", { returnObjects: true }) as LeaderI18n[];

  return (
    <section
      id="leadership"
      aria-labelledby="leadership-heading"
      className="section-padding bg-spring-wood text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100"
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
          <h2 id="leadership-heading" className="mb-4 font-heading text-3xl font-bold md:text-4xl">
            {heading}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-boulder dark:text-zinc-400">{subheading}</p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerStagger(0.2, 0.15)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: reduce ? 0 : 0.25 }}
          className="mx-auto grid max-w-7xl grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4"
        >
          {leaders.map((ld) => (
            <LeaderCard key={ld.email} {...ld} reduce={reduce} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LeadershipSection;