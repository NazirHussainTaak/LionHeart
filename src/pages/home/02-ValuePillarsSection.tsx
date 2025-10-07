// ───────────────────────────────────────────────────────────────────────────────
// src/pages/home/sections/ValuePillarsSection.tsx
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HeadphonesIcon, Crosshair, Lightbulb, Eye } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion, useReducedMotion } from "framer-motion";

// -- Types from i18n -----------------------------------------------------------
type PillarI18n = {
  id: string;
  icon?: string; // "Crosshair" | "Lightbulb" | "Eye" | "Headphones" | "HeadphonesIcon"
  title: string;
  description: string;
};

// Map string -> actual Lucide component (supports both Headphones & HeadphonesIcon)
const ICON_MAP: Record<string, LucideIcon> = {
  Crosshair,
  Lightbulb,
  Eye,
  Headphones: HeadphonesIcon,
  HeadphonesIcon, // in case your JSON uses this key
};

// Motion variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      // Stagger children for a nice cascade
      staggerChildren: 0.12,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18, filter: "blur(2px)" },
  show: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)", 
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as any } 
  },
};

// -- UI ------------------------------------------------------------------------
const PillarCard: React.FC<{ title: string; description: string; iconName?: string; reduce?: boolean }> = ({
  title,
  description,
  iconName,
  reduce,
}) => {
  const Icon = (iconName && ICON_MAP[iconName]) || Lightbulb;

  return (
    <motion.div
      variants={itemVariants}
      whileHover={reduce ? undefined : { y: -6, scale: 1.01 }}
      whileTap={reduce ? undefined : { scale: 0.99 }}
      transition={{ type: "spring" as any, stiffness: 260, damping: 18 }}
      className="h-full"
    >
      <Card className="card-elevated h-full text-center bg-white dark:bg-neutral-900 transition-shadow hover:shadow-lg">
        <CardHeader>
          {/* Icon badge */}
          <motion.div
            aria-hidden="true"
            className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20"
            whileHover={reduce ? undefined : { rotate: 3 }}
            transition={{ type: "spring" as any, stiffness: 200, damping: 12 }}
          >
            <Icon className="h-8 w-8 text-primary" />
          </motion.div>

          <CardTitle className="text-xl font-heading text-neutral-900 dark:text-neutral-100">
            {title}
          </CardTitle>
        </CardHeader>

        <CardContent>
          <p className="text-boulder dark:text-zinc-400">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

// -- Section -------------------------------------------------------------------
const ValuePillarsSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  const reduce = useReducedMotion();

  const title = t("valuePillars.title");
  const subtitle = t("valuePillars.subtitle");
  const pillars = t("valuePillars.items", { returnObjects: true }) as PillarI18n[];

  return (
    <section
      id="value-pillars"
      className="section-padding bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100"
      aria-labelledby="value-pillars-heading"
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="container-width">
        {/* Heading */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 id="value-pillars-heading" className="mb-4 font-heading text-3xl font-bold md:text-4xl">
            {title}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-boulder dark:text-zinc-400">{subtitle}</p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {pillars.map((p) => (
            <PillarCard key={p.id} title={p.title} description={p.description} iconName={p.icon} reduce={reduce} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ValuePillarsSection;
