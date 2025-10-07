// ───────────────────────────────────────────────────────────────────────────────
// src/pages/home/sections/TechnologiesSection.tsx
import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { motion, useReducedMotion, type Variants } from "framer-motion";

import identityImg from "@/assets/technologies/identity.jpg";
import threatImg from "@/assets/technologies/threat-intelligence.jpg";
import socImg from "@/assets/technologies/soc.jpg";
import nocImg from "@/assets/technologies/noc.jpg";
import hybridImg from "@/assets/technologies/hybrid-it.jpg";
import { getVendorLogo } from "@/contexts/logo-resolver";

// ───────────────────────────────────────────────────────────────────────────────
// Inline Motion helpers (slow & smooth)
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

// ───────────────────────────────────────────────────────────────────────────────
// Types & constants
type TechItemI18n = {
  id: "identity" | "threat" | "soc" | "noc" | "hybrid";
  name: string;
  href: string;
  description: string;
};
const IMG_MAP: Record<TechItemI18n["id"], string> = {
  identity: identityImg,
  threat: threatImg,
  soc: socImg,
  noc: nocImg,
  hybrid: hybridImg,
};
const PARTNER_NAMES = [
  "Dell EMC",
  "VMware",
  "Microsoft",
  "CrowdStrike",
  "Fortinet",
  "Veeam",
  "Palo Alto Networks",
  "HPE",
  "Cisco",
  "Splunk",
  "Pure Storage",
  "Nutanix",
] as const;

// ───────────────────────────────────────────────────────────────────────────────
// TechCard Component
const TechCard: React.FC<{ item: TechItemI18n; learnMoreLabel: string; reduce?: boolean }> = ({
  item,
  learnMoreLabel,
  reduce,
}) => (
  <motion.div variants={fadeUp(0, 22, 1.0)} {...(!reduce ? hoverLift : {})} className="h-full">
    <Card className="group card-elevated h-full overflow-hidden bg-white text-neutral-900 transition-shadow hover:shadow-md focus-within:shadow-md dark:bg-neutral-900 dark:text-neutral-100">
      <div className="relative h-48 overflow-hidden ring-1 ring-black/5 dark:ring-white/5">
        <img
          src={IMG_MAP[item.id]}
          alt={item.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 to-transparent"
        />
      </div>

      <CardHeader>
        <CardTitle className="text-xl font-heading transition-colors group-hover:text-primary">
          {item.name}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <p className="mb-4 text-boulder dark:text-zinc-400">{item.description}</p>
        <Link
          to={item.href}
          className="rounded font-semibold text-primary underline-offset-4 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
        >
          {learnMoreLabel}
        </Link>
      </CardContent>
    </Card>
  </motion.div>
);

// ───────────────────────────────────────────────────────────────────────────────
// Section Component
const TechnologiesSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  const reduce = useReducedMotion();

  const tagline = t("technologiesSection.tagline");
  const heading = t("technologiesSection.heading");
  const learnMore = t("technologiesSection.learnMore");
  const items = t("technologiesSection.items", { returnObjects: true }) as TechItemI18n[];
  const partnersTitle = t("technologiesSection.partnersTitle");

  const partnerLogos = useMemo(
    () => PARTNER_NAMES.map((name) => ({ name, logo: getVendorLogo?.(name) })),
    []
  );

  return (
    <section
      id="technologies"
      aria-labelledby="technologies-heading"
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
          <p className="mb-2 font-semibold uppercase tracking-wider text-primary">{tagline}</p>
          <h2 id="technologies-heading" className="mb-4 font-heading text-3xl font-bold md:text-4xl">
            {heading}
          </h2>
        </motion.div>

        {/* Grid of technology cards */}
        <motion.div
          variants={containerStagger(0.2, 0.15)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: reduce ? 0 : 0.2 }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((it) => (
            <TechCard key={it.id} item={it} learnMoreLabel={learnMore} reduce={reduce} />
          ))}
        </motion.div>

        {/* Partner Logo Wall */}
        <motion.section
          variants={fadeUp(0.1, 20, 1.0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: reduce ? 0 : 0.3 }}
          className="mt-24"
        >
          <h3 className="text-center text-xl font-semibold text-muted-foreground mb-6">
            {partnersTitle}
          </h3>

          <motion.div
            variants={containerStagger(0.1, 0.1)}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center"
          >
            {partnerLogos.map(({ name, logo }) => (
              <motion.div key={name} variants={fadeUp(0.05)} className="flex items-center justify-center">
                <div
                  className="flex items-center justify-center p-4 rounded-2xl
                             bg-white dark:bg-white/5
                             ring-2 ring-black/5 dark:ring-white/5"
                  aria-label={name}
                  title={name}
                >
                  {logo ? (
                    <img
                      src={logo}
                      alt={name}
                      className="h-8 w-auto object-contain opacity-80"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <span className="text-sm text-muted-foreground">{name}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </div>
    </section>
  );
};

export default TechnologiesSection;
