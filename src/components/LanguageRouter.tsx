import { useEffect, type ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageRouter({ children }: { children: ReactNode }) {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Fonction pour détecter et synchroniser la langue depuis l'URL
    const syncLanguageFromURL = () => {
      const pathname = window.location.pathname;
      
      if (pathname.startsWith('/fr')) {
        if (i18n.language !== 'fr') {
          i18n.changeLanguage('fr');
        }
      } else if (pathname.startsWith('/en')) {
        if (i18n.language !== 'en') {
          i18n.changeLanguage('en');
        }
      } else {
        // Si aucun préfixe, utiliser anglais par défaut
        if (i18n.language !== 'en') {
          i18n.changeLanguage('en');
        }
      }
    };

    // Synchroniser au montage
    syncLanguageFromURL();

    // Écouter les changements d'URL (navigation avec boutons navigateur)
    const handlePopState = () => {
      syncLanguageFromURL();
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [i18n]);

  return children;
}