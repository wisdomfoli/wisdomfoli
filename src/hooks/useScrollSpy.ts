import { useEffect, useState } from "react";

export function useScrollSpy(sectionIds: string[], offset: number = 100) {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] || "");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      // Si on est tout en haut de la page, activer la première section
      if (window.scrollY < 50) {
        setActiveSection(sectionIds[0] || "");
        return;
      }

      // Trouver la section actuellement visible
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(sectionIds[i]);
            return;
          }
        }
      }

      // Si aucune section n'est trouvée, utiliser la première
      setActiveSection(sectionIds[0] || "");
    };

    // Appeler une fois au chargement pour définir la section initiale
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, offset]);

  return activeSection;
}

