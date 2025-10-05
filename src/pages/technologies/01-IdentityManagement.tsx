import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import heroImage from "@/assets/technologies/01-IdentityManagement.jpg";

const IdentityManagement = () => {
  const { t } = useTranslation('identityManagement');

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">

      {/* Hero Section with Image */}
      {/*<section className="relative section-padding overflow-hidden bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">*/}
      <section className="relative section-padding overflow-hidden hero-pattern lion-geometric bg-spring-wood dark:bg-neutral-950 ">
        <div className="container-width">
          <div className="relative aspect-[21/9] w-full overflow-hidden rounded-2xl ring-1 ring-black/5 dark:ring-white/10">
            <img 
              src={heroImage} 
              alt={t('hero.title')}
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/50 via-black/10 to-transparent dark:from-black/60" />
          </div>
          
          <div className="max-w-4xl mx-auto text-center mt-12">
            <h1 className="text-3xl md:text-5xl font-heading font-bold tracking-tight mb-6">
              {t('hero.title')}
            </h1>
            <p className="mt-3 text-base md:text-lg text-muted-foreground mb-8">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="default" size="lg">
                <Link to="/contact">{t('hero.ctaPrimary')}</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="dark:border-white/20">
                <Link to="/contact">{t('hero.ctaSecondary')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section-padding bg-sorrell-brown dark:bg-neutral-900">
        <div className="container-width">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-foreground">
              {t('overview.title')}
            </h2>
            <p className="text-base md:text-lg text-foreground">
              {t('overview.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-white dark:bg-neutral-950">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-foreground">
              {t('services.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {(t('services.items', { returnObjects: true }) as any[]).map((service: any, index: number) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-sorrell-brown dark:bg-neutral-900 rounded-lg ring-1 ring-black/5 dark:ring-white/10">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{service.name}</h3>
                  <p className="text-sm text-foreground">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary to-accent">
        <div className="container-width">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              {t('hero.ctaPrimary')}
            </h2>
            <Button asChild className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold">
              <Link to="/contact">{t('common.contactUs', 'Contact Us')}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IdentityManagement;
