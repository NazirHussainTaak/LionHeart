// src/pages/home/sections/HeroSection.tsx
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroImage from "@/assets/Lion.png";
import loopGif from "@/assets/showcase/loop.gif";

const stats = [
  { value: "99.98%", label: "Managed Uptime" },
  { value: "24/7", label: "SOC/NOC Support" },
  { value: "UAE", label: "Based Team" },
];

const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  const stats = t("hero.stats", { returnObjects: true }) as { value: string; label: string }[];

  return (
    <section className=" relative section-padding overflow-hidden hero-pattern lion-geometric bg-spring-wood dark:bg-neutral-950 " >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 hidden dark:block" >
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative space-y-8">
            <img
              src={loopGif}
              alt="Animated background"
              className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
            />

          <div className="relative z-10">
              
           <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6 text-foreground"
            >
              {t('hero.headline.prefix')}{" "}
              <span className="text-gradient">{t('hero.headline.highlight')}{" "}</span>
              {t('hero.headline.suffix')}
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8"
            >
              {t('hero.description')}
            </motion.p>


            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild className="btn-hero">
                  <Link to="/contact">{t('nav.contact')}</Link>
                </Button>
              </motion.div>
            </motion.div>

            
            {/* Trust Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-8 pt-8 border-t border-border"
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
            </div>
          </div>

          {/* Hero Image Banner */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <motion.img
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              src={heroImage}
              alt="Enterprise data center infrastructure"
              loading="eager"
              className="rounded-2xl shadow-hero w-full h-[600px] object-cover"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
