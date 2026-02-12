import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { useTranslation } from "react-i18next";
import meImage from "../assets/images/me_image.jpg";

export default function Hero() {
  const { t } = useTranslation();
  const titles = [t("hero.titles.softwareDeveloper"), t("hero.titles.webDeveloper"), t("hero.titles.fullstackDeveloper")];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayedText.length < currentTitle.length) {
      // Ajouter les lettres une par une
      timeout = setTimeout(() => {
        setDisplayedText(currentTitle.slice(0, displayedText.length + 1));
      }, 150); // Délai entre chaque lettre (ralenti)
    } else if (!isDeleting && displayedText === currentTitle) {
      // Attendre avant de commencer à effacer
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 3000); // Attendre 3 secondes avant d'effacer
    } else if (isDeleting && displayedText.length > 0) {
      // Effacer les lettres une par une
      timeout = setTimeout(() => {
        setDisplayedText(displayedText.slice(0, -1));
      }, 80); // Délai entre chaque suppression (ralenti)
    } else if (isDeleting && displayedText.length === 0) {
      // Passer au prochain titre
      setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
      setIsDeleting(false);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, currentIndex, isDeleting, titles]);

  // Animation des icônes sociales
  useEffect(() => {
    // L'état initial est déjà défini dans usePageAnimations
    gsap.to(".social-icon", {
      x: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
      delay: 0.8,
    });
  }, []);

  return (
    <section
      id="home"
      className="text-[#FAFAFA] relative overflow-hidden"
    >
      {/* Ambient glow */}
      {/* <div className="absolute -top-40 right-0 size-112 rounded-full bg-primary/15 blur-[120px]" />
      <div className="absolute -bottom-40 left-0 size-96 rounded-full bg-secondary/15 blur-[120px]" /> */}

      {/* Main Content */}
      <div className="hero-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative">
        {/* Headline */}
        <div className="text-center mb-8 relative">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px bg-gray-300/60 flex-1 max-w-24 sm:max-w-32"></div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              <span>{t("hero.greeting")}</span>{" "}
              <span className="text-primary px-4 py-2 rounded-lg inline-block min-w-60 sm:min-w-75 md:min-w-100 text-center">
                <span className="animated-title">
                  {displayedText}
                  <span className="animate-pulse">|</span>
                </span>
              </span>{" "}
            </h1>
            <div className="h-px bg-gray-300/60 flex-1 max-w-24 sm:max-w-32"></div>
          </div>
        </div>

        {/* Description */}
        <p className="text-center text-white max-w-2xl mx-auto mb-10 text-base sm:text-lg">
          {t("hero.description")}
        </p>

        {/* Profile Image */}
        <div className="relative flex items-center justify-center min-h-80 sm:min-h-100">
          <div className="relative z-0">
            <div className="w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full bg-gray-300/80 overflow-hidden mx-auto">
              <img
                src={meImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
