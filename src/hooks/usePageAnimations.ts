import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const usePageAnimations = () => {
  useLayoutEffect(() => {
    // Définir les états initiaux
    gsap.set('.navbar-animate', { y: -100, opacity: 0 });
    gsap.set('.hero-content', { y: 30, opacity: 0 });
    gsap.set('.social-icon', { x: 50, opacity: 0 });
    gsap.set('.contact-button', { scale: 0, opacity: 0 });
    gsap.set('.animate-section', { y: 60, opacity: 0 });
    gsap.set('.animate-card', { y: 40, opacity: 0 });

    // Animation de la navbar - slide down avec fade in
    gsap.to('.navbar-animate', {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power3.out',
      delay: 0.2,
    });

    // Animation du hero - fade in et slide up
    gsap.to('.hero-content', {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power3.out',
      delay: 0.5,
    });

    // Animations au scroll pour toutes les sections
    const sections = gsap.utils.toArray<HTMLElement>('.animate-section');
    
    sections.forEach((section) => {
      gsap.to(section, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play none none none',
        },
      });
    });

    // Animation pour les cards/items individuels dans les sections
    const cards = gsap.utils.toArray<HTMLElement>('.animate-card');
    
    cards.forEach((card, index) => {
      gsap.to(card, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        delay: (index % 3) * 0.1, // Stagger effect pour plusieurs cards
      });
    });

    // Nettoyage au démontage
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
};

