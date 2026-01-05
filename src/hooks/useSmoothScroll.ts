import { useEffect } from "react";

/**
 * Hook pour ralentir le scroll de la page
 * @param speedFactor - Facteur de ralentissement (0.5 = 2x plus lent, 0.7 = ~1.4x plus lent)
 */
export function useSmoothScroll(speedFactor: number = 0.6) {
  useEffect(() => {
    let isScrolling = false;
    let targetScrollY = window.scrollY;
    let currentScrollY = window.scrollY;

    const handleWheel = (e: WheelEvent) => {
      // Empêcher le comportement par défaut
      e.preventDefault();

      // Calculer la nouvelle position de scroll avec le facteur de ralentissement
      const delta = e.deltaY * speedFactor;
      targetScrollY += delta;

      // Limiter la position de scroll
      targetScrollY = Math.max(0, Math.min(targetScrollY, document.documentElement.scrollHeight - window.innerHeight));

      // Démarrer l'animation si elle n'est pas déjà en cours
      if (!isScrolling) {
        isScrolling = true;
        animateScroll();
      }
    };

    const animateScroll = () => {
      // Calculer la différence entre la position actuelle et la cible
      const diff = targetScrollY - currentScrollY;

      // Si la différence est très petite, arrêter l'animation
      if (Math.abs(diff) < 0.5) {
        currentScrollY = targetScrollY;
        window.scrollTo(0, currentScrollY);
        isScrolling = false;
        return;
      }

      // Interpolation douce (ease-out)
      currentScrollY += diff * 0.15;
      window.scrollTo(0, currentScrollY);

      // Continuer l'animation
      requestAnimationFrame(animateScroll);
    };

    // Ajouter l'écouteur d'événement
    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [speedFactor]);
}

