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

type SolutionI18n = {
  id: string;
  icon: string; // "Server" | "Cloud" | ...
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

const SolutionCard: React.FC<{ s: SolutionI18n }> = ({ s }) => {
  const Icon = ICON_MAP[s.icon] ?? Server;
  return (
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
          {/* use common.readMore if you prefer */}
          Read More →
        </Link>
      </CardContent>
    </Card>
  );
};

const SolutionsSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";

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
        <div className="mb-16 text-center">
          <p className="mb-2 font-semibold uppercase tracking-wider text-primary">{tag}</p>
          <h2 id="solutions-heading" className="mb-4 font-heading text-3xl font-bold md:text-4xl">
            {heading}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-boulder dark:text-zinc-400">{intro}</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((s) => (
            <SolutionCard key={s.id} s={s} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button asChild className="btn-primary">
            <Link to="/solutions" aria-label={cta}>
              {cta}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
