import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import SEOHead from "@/components/SEOHead";
import heroImage from "@/assets/solution/09-DeploymentMaintenance.jpg";

const Deployment = () => {
  const { t, i18n } = useTranslation('deploymentMaintenance');
  const isAr = i18n.language === "ar";

  return (
    <>
      <SEOHead
        title={isAr ? "النشر والصيانة - Lion Heart" : "Deployment & Maintenance - Lion Heart"}
        description={isAr ? "خدمات النشر والصيانة من Lion Heart" : "Deployment and maintenance services from Lion Heart"}
        keywords={isAr ? "النشر, الصيانة, دبي" : "deployment, maintenance, Dubai, UAE"}
      />
      <div className="min-h-screen bg-white dark:bg-neutral-950">
        <section className="relative section-padding overflow-hidden bg-spring-wood dark:bg-neutral-950">
          <div className="container-width">
            <div className="relative aspect-[21/9] w-full overflow-hidden rounded-2xl">
              <img src={heroImage} alt={t('hero.title')} className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="max-w-4xl mx-auto text-center mt-12">
              <h1 className="text-3xl md:text-5xl font-heading font-bold mb-6">{t('hero.title')}</h1>
              <p className="text-lg text-muted-foreground mb-8">{t('hero.subtitle')}</p>
              <Button asChild variant="default" size="lg"><Link to="/contact">{t('hero.ctaPrimary')}</Link></Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Deployment;
