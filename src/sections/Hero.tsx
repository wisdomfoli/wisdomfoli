import { Instagram, Github, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const titles = ["Software Developer", "Web Developer", "FullStack Developer"];
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
      className="text-black min-h-screen relative overflow-hidden"
    >
      {/* Vertical Icons on the Right */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-10">
        <div className="relative">
          <button className="social-icon cursor-pointer p-3 bg-white border border-gray-200 rounded-full shadow-md hover:bg-gray-50 transition-colors">
            <Instagram className="w-5 h-5 text-[#96031A]" />
          </button>
        </div>
        <button className="social-icon cursor-pointer p-3 bg-white border border-gray-200 rounded-full shadow-md hover:bg-gray-50 transition-colors">
          <Linkedin className="w-5 h-5 text-[#96031A]" />
        </button>
        <button className="social-icon cursor-pointer p-3 bg-white border border-gray-200 rounded-full shadow-md hover:bg-gray-50 transition-colors">
          <Github className="w-5 h-5 text-[#96031A]" />
        </button>
      </div>

      {/* Main Content */}
      <div className="hero-content max-w-7xl mx-auto px-8 py-16 relative">
        {/* Headline */}
        <div className="text-center mb-8 relative">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px bg-gray-300 flex-1 max-w-32"></div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
              <span className="">Hi I'm Wisdom & I'm A</span>{" "}
              <span className="text-[#96031A] px-4 py-2 rounded-lg inline-block min-w-[300px] md:min-w-[400px] text-center">
                <span className="animated-title">
                  {displayedText}
                  <span className="animate-pulse">|</span>
                </span>
              </span>{" "}
            </h1>
            <div className="h-px bg-gray-300 flex-1 max-w-32"></div>
          </div>
        </div>

        {/* Description */}
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
          Passionate about developing modern applications, I am familiar with
          high-performing, intuitive digital solutions tailored to the real
          needs of users.
        </p>

        {/* Profile Image and Testimonials */}
        <div className="relative flex items-center justify-center min-h-[400px]">
          {/* Center Profile Image */}
          <div className="relative z-0">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gray-300 overflow-hidden mx-auto">
              <img
                src="https://via.placeholder.com/320"
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
