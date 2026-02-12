import { useState, useEffect } from "react";
import { useScrollSpy } from "../hooks/useScrollSpy";
import ThemeSwitch from "../components/ThemeSwitch";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import profileImage from "../assets/images/me_image.jpg";
import menuIcon from "../assets/icons/menu.png";

export default function Navbar() {
  const { t } = useTranslation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sectionIds = ["home", "about", "skills", "technologies", "summary", "projects"];
  const activeSection = useScrollSpy(sectionIds, 150);

  const navLinks = [
    { id: "home", label: t("nav.home") },
    { id: "about", label: t("nav.about") },
    { id: "skills", label: t("nav.skills") },
    { id: "technologies", label: t("nav.technologies") },
    { id: "summary", label: t("nav.summary") },
    { id: "projects", label: t("nav.projects") },
  ];

  // Fermer la sidebar quand on clique en dehors ou sur Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsSidebarOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // Empêcher le scroll du body quand la sidebar est ouverte
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isSidebarOpen]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      const offset = 80;
      const sectionTop = section.offsetTop - offset;
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    }
    setIsSidebarOpen(false);
  };

  const isActive = (id: string) => {
    return activeSection === id;
  };

  return (
    <>
      <nav className="navbar-animate sticky top-0 md:top-2 z-50 bg-[#1F1F1F] md:bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          {/* Mobile Navbar */}
          <div className="flex md:hidden items-center justify-between">
            {/* Profile Image */}
            <a href="#home" onClick={(e) => handleClick(e, "home")}>
              <img
                src={profileImage}
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover border-2 border-primary"
              />
            </a>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 hover:opacity-80 transition-opacity"
              aria-label="Open menu"
            >
              <img
                src={menuIcon}
                alt="Menu"
                className="w-6 h-6 invert"
              />
            </button>
          </div>

          {/* Desktop Navbar */}
          <div className="hidden md:flex items-center justify-center gap-4">
            {/* Navigation Links */}
            <div className="flex flex-wrap items-center justify-center gap-2 bg-black px-3 sm:px-4 py-2 rounded-full">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleClick(e, link.id)}
                  className={`px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-medium transition-colors cursor-pointer rounded-full whitespace-nowrap ${
                    isActive(link.id)
                      ? "text-primary bg-white/5"
                      : "text-stone-100/80 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
            {/* Language and Theme Toggle */}
            <div className="flex items-center gap-2">
              <LanguageSwitcher />
              <ThemeSwitch />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300 md:hidden ${
          isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      />

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-72 bg-[#1a1a1a] z-50 transform transition-transform duration-300 ease-out md:hidden ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <img
              src={profileImage}
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover border-2 border-primary"
            />
            <span className="text-white font-medium">Wisdom Foli</span>
          </div>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="p-2 text-white/70 hover:text-white transition-colors"
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Sidebar Navigation Links */}
        <nav className="flex flex-col p-4 gap-1">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleClick(e, link.id)}
              className={`px-4 py-3 text-sm font-medium transition-colors cursor-pointer rounded-lg ${
                isActive(link.id)
                  ? "text-primary bg-white/5"
                  : "text-stone-100/80 hover:text-white hover:bg-white/5"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Sidebar Footer - Theme & Language */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10">
          <div className="flex items-center justify-between">
            <LanguageSwitcher />
            <ThemeSwitch />
          </div>
        </div>
      </aside>
    </>
  );
}
