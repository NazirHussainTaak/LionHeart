// src/pages/home/sections/HeroSection.tsx
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/Lion.png";
import loopGif from "@/assets/showcase/loop.gif"; // ✅ import gif

// const { t } = useTranslation();

const stats = [
  { value: "99.98%", label: "Managed Uptime" },
  { value: "24/7", label: "SOC/NOC Support" },
  { value: "UAE", label: "Based Team" },
];

const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  const stats = t("hero.stats", { returnObjects: true }) as { value: string; label: string }[];

  return (
    <section
      className="
        relative section-padding overflow-hidden
        hero-pattern lion-geometric bg-spring-wood
        dark:bg-neutral-950 "
    >
{/*    <section
  classname="
    relative section-padding overflow-hidden
    hero-pattern-lion-grid lion-geometric lion-geometric-facet
    bg-spring-wood text-neutral-900
    dark:bg-neutral-950 dark:text-neutral-100
    "
    >*/}

      {/* soft gradient glow for dark mode */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 hidden dark:block"
      >
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content with GIF Background */}
          <div className="relative space-y-8">
            {/* Loop GIF Background */}
            <img
              src={loopGif}
              alt="Animated background"
              className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
            />

            {/* Foreground Text */}
{/*            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6 text-foreground">
                {t('hero.title')}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                {t('hero.description')}
              </p>
            </div>*/}
            <div className="relative z-10">
              
              <h1
                className="
                  text-2xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6
                  text-foreground
                "
              >
                {t('hero.headline.prefix')}{" "}
                <span className="text-gradient">{t('hero.headline.highlight')}{" "}</span>
                {t('hero.headline.suffix')}
              </h1>

              <p
                className="
                  text-lg md:text-xl leading-relaxed mb-8
                  text-boulder dark:text-neutral-300
                "
              >
                {t('hero.description')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="btn-hero">
                  <Link to="/contact">{t('nav.contact')}</Link>
                </Button>
              </div>

              <div
                className="
                  flex flex-wrap items-center gap-8 pt-8
                  border-t border-sorrell-brown/30 dark:border-white/10
                "
              >

              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-boulder dark:text-neutral-400">
                    {stat.label}
                  </div>
                </div>
              ))}

              </div>
            </div>
          </div>

          {/* Right Content - Lion Image */}
          <div className="relative">
            <img
              src={heroImage}
              alt="Enterprise data center infrastructure"
              className="
                rounded-2xl w-full h-[600px] object-cover
                shadow-hero ring-1 ring-black/5 dark:ring-white/10
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
