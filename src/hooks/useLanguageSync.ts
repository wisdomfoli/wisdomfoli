import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

export function useLanguageSync() {
  const { i18n } = useTranslation();
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initializeLanguage = () => {
      const pathname = window.location.pathname;
      let detectedLang = 'en'; // langue par défaut
      
      if (pathname.startsWith('/fr')) {
        detectedLang = 'fr';
      } else if (pathname.startsWith('/en')) {
        detectedLang = 'en';
      }
      
      // Changer la langue seulement si différente
      if (i18n.language !== detectedLang) {
        i18n.changeLanguage(detectedLang).then(() => {
          setIsInitialized(true);
        });
      } else {
        setIsInitialized(true);
      }
    };

    // Si i18n est prêt, initialiser
    if (i18n.isInitialized) {
      initializeLanguage();
    } else {
      // Sinon attendre qu'i18n soit prêt
      i18n.on('initialized', initializeLanguage);
      return () => i18n.off('initialized', initializeLanguage);
    }
  }, [i18n]);

  return { isInitialized, currentLanguage: i18n.language };
}