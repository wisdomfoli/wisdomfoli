import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  return (
    <section id="about" className="animate-section text-[#FAFAFA] py-12 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with large title */}
        <div className="relative mb-10 sm:mb-16 lg:mb-20">
          <h2 className="shine-effect text-4xl sm:text-5xl md:text-5xl font-bold absolute top-0 left-0 z-0">
            {t("about.title")}
          </h2>
          <div className="h-10 sm:h-12" />
        </div>

        {/* Main Content - 2 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 - Mon Parcours */}
          <div className="animate-card glass-card rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-primary">
              {t("about.journey.title")}
            </h2>

            <p className="text-white text-sm sm:text-base leading-relaxed">
              {t("about.journey.description")}
            </p>

            {/* <p className="text-white text-sm sm:text-base leading-relaxed mt-4">
              I focus on building clean, scalable, and maintainable applications
              that deliver real value to users. Through continuous learning and
              hands-on experience, I strive to improve performance, usability,
              and overall user experience in every project I work on.
            </p> */}
          </div>

          {/* Card 2 - Mes Perspectives Futures */}
          <div className="animate-card glass-card rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-primary">
              {t("about.future.title")}
            </h2>

            <p className="text-white text-sm sm:text-base leading-relaxed">
              {t("about.future.description")}
            </p>

            {/* <p className="text-white text-sm sm:text-base leading-relaxed mt-4">
              In the future, I plan to deepen my knowledge of modern frameworks,
              backend architectures, and mobile technologies. By staying curious
              and adaptable, I strive to build scalable solutions that make a
              meaningful difference.
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
}
