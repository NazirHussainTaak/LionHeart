import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslations from './locales/en.json';
import arTranslations from './locales/ar.json';

// Solution pages
import dataCenter_en from './locales/solutions/01_DataCenter_en.json';
import dataCenter_ar from './locales/solutions/01_DataCenter_ar.json';
import cloud_en from './locales/solutions/02_Cloud_en.json';
import cloud_ar from './locales/solutions/02_Cloud_ar.json';
import dataProtection_en from './locales/solutions/03_DataProtection_en.json';
import dataProtection_ar from './locales/solutions/03_DataProtection_ar.json';
import converged_en from './locales/solutions/04_Converged_en.json';
import converged_ar from './locales/solutions/04_Converged_ar.json';
import storage_en from './locales/solutions/05_Storage_en.json';
import storage_ar from './locales/solutions/05_Storage_ar.json';
import networkingSecurity_en from './locales/solutions/06_NetworkingSecurity_en.json';
import networkingSecurity_ar from './locales/solutions/06_NetworkingSecurity_ar.json';
import migration_en from './locales/solutions/07_Migration_en.json';
import migration_ar from './locales/solutions/07_Migration_ar.json';
import bcdr_en from './locales/solutions/08_BCDR_en.json';
import bcdr_ar from './locales/solutions/08_BCDR_ar.json';
import deploymentMaintenance_en from './locales/solutions/09_DeploymentMaintenance_en.json';
import deploymentMaintenance_ar from './locales/solutions/09_DeploymentMaintenance_ar.json';
import edrXdrNdr_en from './locales/solutions/10_EDR-XDR-NDR_en.json';
import edrXdrNdr_ar from './locales/solutions/10_EDR-XDR-NDR_ar.json';

// Technology pages
import identityManagement_en from './locales/technologies/01_IdentityManagement_en.json';
import identityManagement_ar from './locales/technologies/01_IdentityManagement_ar.json';
import threatIntelligence_en from './locales/technologies/02_ThreatIntelligence_en.json';
import threatIntelligence_ar from './locales/technologies/02_ThreatIntelligence_ar.json';
import soc_en from './locales/technologies/03_SOC_en.json';
import soc_ar from './locales/technologies/03_SOC_ar.json';
import noc_en from './locales/technologies/04_NOC_en.json';
import noc_ar from './locales/technologies/04_NOC_ar.json';
import hybridIT_en from './locales/technologies/05_HybridIT_en.json';
import hybridIT_ar from './locales/technologies/05_HybridIT_ar.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations,
        dataCenter: dataCenter_en,
        cloud: cloud_en,
        dataProtection: dataProtection_en,
        converged: converged_en,
        storage: storage_en,
        networkingSecurity: networkingSecurity_en,
        migration: migration_en,
        bcdr: bcdr_en,
        deploymentMaintenance: deploymentMaintenance_en,
        edrXdrNdr: edrXdrNdr_en,
        identityManagement: identityManagement_en,
        threatIntelligence: threatIntelligence_en,
        soc: soc_en,
        noc: noc_en,
        hybridIT: hybridIT_en,
      },
      ar: {
        translation: arTranslations,
        dataCenter: dataCenter_ar,
        cloud: cloud_ar,
        dataProtection: dataProtection_ar,
        converged: converged_ar,
        storage: storage_ar,
        networkingSecurity: networkingSecurity_ar,
        migration: migration_ar,
        bcdr: bcdr_ar,
        deploymentMaintenance: deploymentMaintenance_ar,
        edrXdrNdr: edrXdrNdr_ar,
        identityManagement: identityManagement_ar,
        threatIntelligence: threatIntelligence_ar,
        soc: soc_ar,
        noc: noc_ar,
        hybridIT: hybridIT_ar,
      },
    },
    fallbackLng: 'en',
    supportedLngs: ['en', 'ar'],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['path', 'localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupFromPathIndex: 0,
    },
  });

export default i18n;
