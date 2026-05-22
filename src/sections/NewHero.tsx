import { useTranslation } from "react-i18next";
import { Calendar } from "lucide-react";
import heroImage from "../assets/images/portfolio_hero.png";

export default function NewHero() {
  const { t } = useTranslation();

  const stats = [
    { value: "3+", label: t("hero.stats.yearsExperience") },
    { value: "20+", label: t("hero.stats.projectsDone") },
    { value: "10+", label: t("hero.stats.satisfiedClients") },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#1F1F1F] flex flex-col"
    >

      {/* Ambient glow behind image */}
      <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-primary/10 via-transparent to-transparent pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-4 pb-0 flex flex-col">
        {/* Available badge */}
        <div className="flex justify-center mb-3 sm:mb-4">
          <div className="flex items-center gap-2 bg-black/40 border border-white/10 backdrop-blur-sm rounded-full px-4 py-1.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
            </span>
            <span className="text-xs sm:text-sm text-white/80 font-medium">
              Available for Work
            </span>
          </div>
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-4 lg:gap-0 flex-1">
          {/* ── LEFT COLUMN ── */}
          <div className="w-full lg:w-[70%] flex flex-col justify-center text-center lg:text-left">
            {/* Client counter */}
            <div className="flex items-center gap-3 mb-8 justify-center lg:justify-start">
              <div className="flex -space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-[#1F1F1F] bg-gradient-to-br from-primary/60 to-primary/20 flex items-center justify-center text-xs font-bold text-white"
                    style={{ zIndex: 3 - i }}
                  >
                    {["W", "F", "D"][i]}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-white font-bold text-lg leading-none">10+</p>
                <p className="text-white/50 text-xs">Total Satisfied Clients</p>
              </div>
            </div>

            {/* Heading */}
            <h1 className="font-bold leading-none mb-8">
              <span className="block text-4xl sm:text-5xl md:text-5xl text-white tracking-tight">
                IT'S ME
              </span>
              <span
                className="block text-4xl sm:text-5xl md:text-5xl tracking-tight"
                style={{ color: "#47E5BC" }}
              >
                WISDOM FOLI
              </span>
            </h1>

            {/* Description */}
            <p className="text-white/60 text-sm sm:text-base max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              {t("hero.description")}
            </p>

            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm sm:text-base text-[#1F1F1F] bg-primary hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
              >
                <Calendar className="w-4 h-4" />
                {t("hero.scheduleCall")}
              </a>
            </div>
          </div>

          {/* ── RIGHT COLUMN — Photo ── */}
          <div className="relative flex-shrink-0 flex items-center justify-center lg:justify-end w-full lg:w-auto">
            {/* Glow circle behind photo */}
            <div
              className="absolute inset-0 m-auto w-72 h-72 sm:w-96 sm:h-96 rounded-full blur-3xl opacity-20"
              style={{ background: "#47E5BC" }}
            />

            <img
              src={heroImage}
              alt="Wisdom Foli"
              className="relative z-10 w-64 sm:w-80 md:w-96 lg:w-[420px] object-cover object-top drop-shadow-2xl"
              style={{ maxHeight: "520px" }}
            />
          </div>
        </div>

        {/* ── STATS ROW ── */}
        <div className="relative z-10 border-t border-white/10 mt-auto py-6">
          <div className="grid grid-cols-3 divide-x divide-white/10">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center px-4">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                  {stat.value}
                </p>
                <p className="text-white/50 text-xs sm:text-sm mt-0.5">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
