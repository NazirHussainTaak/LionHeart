import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export const useLanguageDetection = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Check if language is already set in localStorage
    const storedLanguage = localStorage.getItem("i18nextLng");
    
    if (!storedLanguage || storedLanguage === "en-US") {
      // Detect browser language
      const browserLanguage = navigator.language || navigator.languages?.[0];
      
      // Determine if Arabic should be the default
      const isArabic = browserLanguage?.startsWith("ar") || 
                      navigator.languages?.some(lang => lang.startsWith("ar"));
      
      const detectedLanguage = isArabic ? "ar" : "en";
      
      // Only change if different from current
      if (i18n.language !== detectedLanguage) {
        i18n.changeLanguage(detectedLanguage);
        document.documentElement.dir = detectedLanguage === "ar" ? "rtl" : "ltr";
        document.documentElement.lang = detectedLanguage;
      }
    }
  }, [i18n]);

  return { currentLanguage: i18n.language };
};
