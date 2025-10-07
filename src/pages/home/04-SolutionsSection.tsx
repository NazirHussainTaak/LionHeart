// ───────────────────────────────────────────────────────────────────────────────
// src/pages/home/sections/SolutionsSection.tsx
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Server,
  Cloud,
  Shield,
  Layers,
  Database,
  Network,
  ArrowRightLeft,
  RefreshCw,
  Settings,
  Eye,
  type LucideIcon,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion, useReducedMotion, type Variants } from "framer-motion";

// ── Inline Motion helpers (slow, smooth) ──────────────────────────────────────
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
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration, ease: EASE_OUT, delay } },
});
const hoverLift = {
  whileHover: { y: -6, scale: 1.02 },
  whileTap: { scale: 0.98 },
  transition: { type: "spring" as any, stiffness: 160, damping: 18 },
};

// ── Types and Icons ──────────────────────────────────────────────────────────
type SolutionI18n = {
  id: string;
  icon: string;
  name: string;
  href: string;
  description: string;
};
const ICON_MAP: Record<string, LucideIcon> = {
  Server,
  Cloud,
  Shield,
  Layers,
  Database,
  Network,
  ArrowRightLeft,
  RefreshCw,
  Settings,
  Eye,
};

// ── Card Component ───────────────────────────────────────────────────────────
const SolutionCard: React.FC<{ s: SolutionI18n; reduce?: boolean }> = ({ s, reduce }) => {
  const Icon = ICON_MAP[s.icon] ?? Server;
  return (
    <motion.div variants={fadeUp(0, 22, 1.0)} {...(!reduce ? hoverLift : {})} className="h-full">
      <Card className="group card-elevated h-full bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100 transition-shadow hover:shadow-md focus-within:shadow-md">
        <CardHeader>
          <div
            aria-hidden="true"
            className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20"
          >
            <Icon className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="text-center text-xl font-heading transition-colors group-hover:text-primary">
            {s.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="mb-4 text-boulder dark:text-zinc-400">{s.description}</p>
          <Link
            to={s.href}
            className="font-semibold text-primary underline-offset-4 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 rounded"
            aria-label={`Read more about ${s.name}`}
          >
            Read More →
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
};

// ── Section Component ────────────────────────────────────────────────────────
const SolutionsSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  const reduce = useReducedMotion();

  const tag = t("solutionsSection.tagline");
  const heading = t("solutionsSection.heading");
  const intro = t("solutionsSection.intro");
  const items = t("solutionsSection.items", { returnObjects: true }) as SolutionI18n[];
  const cta = t("solutionsSection.ctaAll");

  return (
    <section
      id="solutions"
      aria-labelledby="solutions-heading"
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
          <p className="mb-2 font-semibold uppercase tracking-wider text-primary">{tag}</p>
          <h2 id="solutions-heading" className="mb-4 font-heading text-3xl font-bold md:text-4xl">
            {heading}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-boulder dark:text-zinc-400">{intro}</p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerStagger(0.2, 0.15)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: reduce ? 0 : 0.2 }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((s) => (
            <SolutionCard key={s.id} s={s} reduce={reduce} />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeUp(0.1, 18, 1.0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: reduce ? 0 : 0.25 }}
          className="mt-12 text-center"
        >
          <motion.div {...(!reduce ? hoverLift : {})} className="inline-flex">
            <Button asChild className="btn-primary">
              <Link to="/solutions" aria-label={cta}>
                {cta}
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsSection;
