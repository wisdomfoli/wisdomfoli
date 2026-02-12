import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enTranslations from "./locales/en.json";
import frTranslations from "./locales/fr.json";

const resources = {
  en: {
    translation: enTranslations
  },
  fr: {
    translation: frTranslations
  }
};

// Détecteur personnalisé pour les URLs
const pathLanguageDetector = {
  name: 'path',
  lookup() {
    const pathname = window.location.pathname;
    if (pathname.startsWith('/fr')) return 'fr';
    if (pathname.startsWith('/en')) return 'en';
    return null;
  },
  cacheUserLanguage() {
    // Ne pas cacher automatiquement
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    supportedLngs: ["en", "fr"],
    detection: {
      order: ['path', 'navigator', 'htmlTag'],
      lookupFromPathIndex: 0,
    },
    interpolation: {
      escapeValue: false
    }
  });

// Ajouter le détecteur personnalisé
i18n.services.languageDetector.addDetector(pathLanguageDetector);

// Fonction pour changer la langue et l'URL
export const changeLanguageWithURL = (lang: string): void => {
  const currentPath = window.location.pathname;
  let newPath;
  
  // Supprimer le préfixe de langue existant
  const pathWithoutLang = currentPath.replace(/^\/(en|fr)/, '') || '/';
  
  // Ajouter le nouveau préfixe de langue
  if (lang === 'fr') {
    newPath = '/fr' + (pathWithoutLang === '/' ? '' : pathWithoutLang);
  } else {
    newPath = pathWithoutLang === '/' ? '/' : pathWithoutLang;
  }
  
  // Changer l'URL sans recharger la page
  window.history.pushState({}, '', newPath);
  
  // Changer la langue dans i18n
  i18n.changeLanguage(lang);
};

export default i18n;
