// ───────────────────────────────────────────────────────────────────────────────
// src/pages/home/sections/ValuePillarsSection.tsx
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HeadphonesIcon, Crosshair, Lightbulb, Eye } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

// -- Types from i18n -----------------------------------------------------------
type PillarI18n = {
  id: string;
  icon?: string;          // "Crosshair" | "Lightbulb" | "Eye" | "Headphones" | "HeadphonesIcon"
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

// -- UI ------------------------------------------------------------------------
const PillarCard: React.FC<{ title: string; description: string; iconName?: string }> = ({
  title,
  description,
  iconName,
}) => {
  const Icon = (iconName && ICON_MAP[iconName]) || Lightbulb; // sensible fallback
  return (
    <Card className="card-elevated text-center bg-white dark:bg-neutral-900 transition-shadow hover:shadow-md">
      <CardHeader>
        {/* Icon badge */}
        <div
          aria-hidden="true"
          className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20"
        >
          <Icon className="h-8 w-8 text-primary" />
        </div>

        <CardTitle className="text-xl font-heading text-neutral-900 dark:text-neutral-100">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-boulder dark:text-zinc-400">{description}</p>
      </CardContent>
    </Card>
  );
};

// -- Section -------------------------------------------------------------------
const ValuePillarsSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";

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
        <div className="mb-16 text-center">
          <h2 id="value-pillars-heading" className="mb-4 font-heading text-3xl font-bold md:text-4xl">
            {title}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-boulder dark:text-zinc-400">{subtitle}</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <PillarCard key={p.id} title={p.title} description={p.description} iconName={p.icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePillarsSection;
