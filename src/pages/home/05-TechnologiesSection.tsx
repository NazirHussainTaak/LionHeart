// src/pages/home/sections/TechnologiesSection.tsx
import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

// Card images (adjust paths if your assets live elsewhere)
import identityImg from "@/assets/technologies/identity.jpg";
import threatImg from "@/assets/technologies/threat-intelligence.jpg";
import socImg from "@/assets/technologies/soc.jpg";
import nocImg from "@/assets/technologies/noc.jpg";
import hybridImg from "@/assets/technologies/hybrid-it.jpg";

// If you already have a helper that maps vendor names to logo images, import it.
// If not, replace this with your own resolver or a static map of imports.
import { getVendorLogo } from "@/contexts/logo-resolver";

// ---------------- Types ----------------
type TechItemI18n = {
  id: "identity" | "threat" | "soc" | "noc" | "hybrid";
  name: string;
  href: string;
  description: string;
};

// ---------------- Image map for cards ----------------
const IMG_MAP: Record<TechItemI18n["id"], string> = {
  identity: identityImg,
  threat: threatImg,
  soc: socImg,
  noc: nocImg,
  hybrid: hybridImg,
};

// ---------------- Tech card ----------------
const TechCard: React.FC<{ item: TechItemI18n; learnMoreLabel: string }> = ({
  item,
  learnMoreLabel,
}) => (
  <Card className="group card-elevated h-full overflow-hidden bg-white text-neutral-900 transition-shadow hover:shadow-md focus-within:shadow-md dark:bg-neutral-900 dark:text-neutral-100">
    <div className="relative h-48 overflow-hidden ring-1 ring-black/5 dark:ring-white/5">
      <img
        src={IMG_MAP[item.id]}
        alt={item.name}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
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
);

// ---------------- Logos (DO NOT CHANGE THIS SECTION) ----------------
// Optional: adjust/extend as you add partners
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

// ---------------- Section ----------------
const TechnologiesSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  const tagline = t("technologiesSection.tagline");
  const heading = t("technologiesSection.heading");
  const learnMore = t("technologiesSection.learnMore");
  const items = t("technologiesSection.items", { returnObjects: true }) as TechItemI18n[];
  const partnersTitle = t("technologiesSection.partnersTitle");

  // Resolve logos from names, keeping PARTNER_NAMES exactly as-is
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
        <div className="mb-16 text-center">
          <p className="mb-2 font-semibold uppercase tracking-wider text-primary">{tagline}</p>
          <h2 id="technologies-heading" className="mb-4 font-heading text-3xl font-bold md:text-4xl">
            {heading}
          </h2>
        </div>

        {/* Grid of technology cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <TechCard key={it.id} item={it} learnMoreLabel={learnMore} />
          ))}
        </div>

        {/* Logo Wall (white tiles, no hover; dark-mode friendly rings) */}
        <section className="mt-24">
          <h3 className="text-center text-xl font-semibold text-muted-foreground mb-6">
            {partnersTitle}
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {partnerLogos.map(({ name, logo }) => (
              <div
                key={name}
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
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default TechnologiesSection;
