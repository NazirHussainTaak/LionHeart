import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  schema?: object;
}

const SEOHead = ({
  title,
  description,
  keywords,
  image = "https://lionheartuae.com/og-image.jpg",
  url,
  type = "website",
  schema
}: SEOHeadProps) => {
  const { t, i18n } = useTranslation();

  const defaultTitle = i18n.language === "ar"
    ? "Lion Heart Computer System - حلول تكنولوجيا المعلومات للمؤسسات في الإمارات"
    : "Lion Heart Computer System - Enterprise IT Solutions in UAE";

  const defaultDescription = i18n.language === "ar"
    ? "نؤمن، نحدث، ونحافظ على تشغيل تكنولوجيا المعلومات الحيوية الخاصة بك. Lion Heart Computer System يوفر حلول تكنولوجيا المعلومات للمؤسسات، والأمن السيبراني، والخدمات السحابية في دبي، الإمارات."
    : "Secure, modernize, and keep your critical IT running. Lion Heart Computer System provides enterprise-grade IT solutions, cybersecurity, and cloud services in Dubai, UAE.";

  const defaultKeywords = i18n.language === "ar"
    ? "حلول تكنولوجيا المعلومات, الأمن السيبراني, الحلول السحابية, مركز البيانات, دبي, الإمارات, Lion Heart"
    : "IT solutions, cybersecurity, cloud services, data center, Dubai, UAE, Lion Heart, enterprise IT, managed services";

  const siteTitle = title || defaultTitle;
  const siteDescription = description || defaultDescription;
  const siteKeywords = keywords || defaultKeywords;
  const canonicalUrl = url || (typeof window !== "undefined" ? window.location.href : "https://lionheartuae.com");

  const structuredData = schema || {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Lion Heart Computer System",
    "url": "https://lionheartuae.com",
    "logo": "https://lionheartuae.com/logo.png",
    "description": siteDescription,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bank Melli Iran Building, 2nd Floor, Office No. 11, Khaled Bin Waleed Street",
      "addressLocality": "Dubai",
      "postalCode": "99927",
      "addressCountry": "AE"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+971-55-558-9672",
      "contactType": "Sales",
      "email": "naim@lionheartuae.com",
      "availableLanguage": ["en", "ar"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/lionheartuae"
    ]
  };

  return (
    <Helmet>
      <html lang={i18n.language} dir={i18n.language === "ar" ? "rtl" : "ltr"} />
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta name="keywords" content={siteKeywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content={i18n.language === "ar" ? "ar_AE" : "en_US"} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={image} />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Lion Heart Computer System" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEOHead;
