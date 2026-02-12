import { useTranslation } from 'react-i18next';
import { changeLanguageWithURL } from '../i18n';
import { useEffect, useState } from 'react';
import { useProgress } from '../contexts/ProgressContext';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language);
  const { showProgress } = useProgress();

  // Synchroniser l'état avec i18n
  useEffect(() => {
    const updateLanguage = () => {
      setCurrentLang(i18n.language);
    };
    
    i18n.on('languageChanged', updateLanguage);
    updateLanguage(); // Initial sync
    
    return () => {
      i18n.off('languageChanged', updateLanguage);
    };
  }, [i18n]);

  // Détecter les changements d'URL manuels
  useEffect(() => {
    const handlePopState = () => {
      const pathname = window.location.pathname;
      const langFromPath = pathname.startsWith('/fr') ? 'fr' : 'en';
      if (langFromPath !== i18n.language) {
        i18n.changeLanguage(langFromPath);
      }
    };

    window.addEventListener('popstate', handlePopState);
    
    // Vérifier la langue au chargement initial
    const pathname = window.location.pathname;
    const langFromPath = pathname.startsWith('/fr') ? 'fr' : 'en';
    if (langFromPath !== i18n.language) {
      i18n.changeLanguage(langFromPath);
    }

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [i18n]);

  const toggleLanguage = () => {
    showProgress();
    const newLang = currentLang === 'en' ? 'fr' : 'en';
    changeLanguageWithURL(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1.5 text-xs sm:text-sm font-medium text-stone-100/80 hover:text-white transition-colors cursor-pointer rounded-full whitespace-nowrap border border-white/20 hover:border-white/40"
    >
      {currentLang === 'en' ? 'FR' : 'EN'}
    </button>
  );
}