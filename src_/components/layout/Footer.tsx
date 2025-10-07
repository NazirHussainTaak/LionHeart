// src/components/layout/Footer.tsx
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.svg";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const currentYear = new Date().getFullYear();
  const isArabic = i18n.language === "ar";

  // Arrays & objects from translations
  const quickLinks = t("footer.quickLinksItems", {
    returnObjects: true,
  }) as { name: string; href: string }[];

  const bottomLinks = t("footer.bottomLinks", {
    returnObjects: true,
  }) as { name: string; href: string }[];

  const address = t("footer.address", {
    returnObjects: true,
  }) as { line1: string; line2: string; line3: string };

  const hours = t("footer.hours", {
    returnObjects: true,
  }) as { days: string; time: string };

  const subscribe = t("footer.subscribe", {
    returnObjects: true,
  }) as { title: string; description: string; placeholder: string; button: string; note: string };

  const contactStatic = t("footer.contact", {
    returnObjects: true,
  }) as { city: string; phone: string; email: string };

  function handleSubscribe(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: handle submission
  }

  return (
    <footer
      className={`
        bg-mine-shaft text-white dark:bg-neutral-900
        ${isArabic ? "rtl" : "ltr"}
      `}
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="container-width section-padding">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company */}
          <section aria-labelledby="footer-company" className="space-y-5">
            <img src={logo} alt="Lion Heart Computer System" className="h-12 w-auto" />
            <p className="text-sorrell-brown/90 dark:text-neutral-300 text-sm leading-relaxed">
              {t("footer.description")}
            </p>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sorrell-brown dark:text-neutral-300">{contactStatic.city}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <a
                  href={`tel:${contactStatic.phone.replace(/\s+/g, "")}`}
                  className="text-sorrell-brown hover:text-primary transition-colors dark:text-neutral-300"
                >
                  {contactStatic.phone}
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <a
                  href={`mailto:${contactStatic.email}`}
                  className="text-sorrell-brown hover:text-primary transition-colors dark:text-neutral-300"
                >
                  {contactStatic.email}
                </a>
              </div>
            </div>
          </section>

          {/* Quick Links */}
          <section aria-labelledby="footer-quick-links">
            <h3 id="footer-quick-links" className="text-white font-semibold mb-3">
              {t("footer.quickLinksTitle")}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sorrell-brown hover:text-primary transition-colors text-sm dark:text-neutral-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Contact Info */}
          <section aria-labelledby="footer-contact">
            <h3 id="footer-contact" className="text-white font-semibold mb-3">
              {t("footer.contactTitle")}
            </h3>
            <div className="space-y-5">
              <div>
                <h4 className="font-medium text-white mb-2">{t("footer.addressTitle")}</h4>
                <address className="not-italic text-sorrell-brown text-sm leading-relaxed dark:text-neutral-300">
                  {address.line1}
                  <br />
                  {address.line2}
                  <br />
                  {address.line3}
                </address>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2">{t("footer.hoursTitle")}</h4>
                <p className="text-sorrell-brown text-sm dark:text-neutral-300">
                  {hours.days}, {hours.time}
                </p>
              </div>
              <Button asChild className="rounded-full">
                <Link to="/contact">{t("footer.ctaContact")}</Link>
              </Button>
            </div>
          </section>

          {/* Newsletter */}
          <section aria-labelledby="footer-subscribe">
            <h3 id="footer-subscribe" className="text-white font-semibold mb-3">
              {subscribe.title}
            </h3>
            <p className="text-sorrell-brown text-sm mb-4 dark:text-neutral-300">
              {subscribe.description}
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
              <label htmlFor="newsletter-email" className="sr-only">
                {subscribe.placeholder}
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder={subscribe.placeholder}
                className="
                  w-full px-4 py-2 rounded-lg text-sm
                  bg-white text-black
                  focus:outline-none focus:ring-2 focus:ring-primary
                  dark:bg-neutral-800 dark:text-white dark:placeholder:text-neutral-400
                  border border-white/10 dark:border-white/10
                "
              />
              <Button type="submit" className="px-5 py-2 rounded-lg text-sm font-medium">
                {subscribe.button}
              </Button>
            </form>

            <p className="mt-2 text-xs text-sorrell-brown/80 dark:text-neutral-400">
              {subscribe.note}
            </p>
          </section>
        </div>

        {/* Bottom bar */}
        <div
          className="
            mt-12 pt-6 border-t border-leather/30
            flex flex-col md:flex-row items-center justify-between gap-4
            dark:border-white/10
          "
        >
          <nav aria-label="Footer secondary" className="flex flex-wrap items-center gap-6 text-sm">
            {bottomLinks.map((l) => (
              <Link
                key={l.name}
                to={l.href}
                className="text-sorrell-brown hover:text-primary transition-colors dark:text-neutral-300"
              >
                {l.name}
              </Link>
            ))}
          </nav>

          <p className="text-sorrell-brown text-sm dark:text-neutral-400">
            © {currentYear} Lion Heart Computer System. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
