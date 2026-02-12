import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import lightIcon from "../assets/icons/brightness_12080243.png";
import darkIcon from "../assets/icons/moon_12080286.png";

export default function ThemeSwitch() {
  const { t } = useTranslation();
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  // Expose l'état du thème sur <html> pour un futur theming si besoin
  useEffect(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;

    if (isDark) {
      root.dataset.theme = "dark";
    } else {
      root.dataset.theme = "light";
    }
  }, [isDark]);

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? t("theme.darkMode") : t("theme.lightMode")}
      className="inline-flex items-center justify-start"
    >
      <div className={ isDark ? "relative h-8 w-14 sm:h-8 sm:w-16 rounded-full bg-[#1F1F1F] shadow-[0_6px_16px_rgba(0,0,0,0.45)] transition-colors duration-300" : "relative h-8 w-14 sm:h-8 sm:w-16 rounded-full bg-primary shadow-[0_6px_16px_rgba(0,0,0,0.45)] transition-colors duration-300"}>
        {/* Thumb */}
        <span
          className={`absolute top-1/2 -translate-y-1/2 sm:h-7 sm:w-7 rounded-full flex items-center justify-center transition-transform duration-300 ease-out ${
            isDark ? "translate-x-7 sm:translate-x-8" : "translate-x-1.5"
          }`}
        >
          <img
            src={isDark ? darkIcon : lightIcon}
            alt={isDark ? t("theme.darkIcon") : t("theme.lightIcon")}
            className="size-6 object-contain rounded-full"
          />
        </span>
      </div>
    </button>
  );
}
