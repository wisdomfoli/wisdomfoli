import { Download } from "lucide-react";
import { useTranslation } from "react-i18next";
import cvPdf from "../assets/files/wisdomfoli_cv.pdf";

export default function Resume() {
  const { t } = useTranslation();
  const experienceItems = [
    {
      date: t("resume.experiences.thepotentialai.date"),
      title: t("resume.experiences.thepotentialai.title"),
      institution: t("resume.experiences.thepotentialai.institution"),
      description: t("resume.experiences.thepotentialai.description"),
      technologies: [
        "Expo/React Native",
        "Tailwind",
        "Paygate",
        "Native Wind",
        "Redis",
        "Celery",
        "PostGIS",
        "PostgreSQL",
        "Django",
        "React",
        "DRF",
        "PostgreSQL",
        "Google Maps API",
      ],
      demoUrl: "https://proxy-go.com/",
    },

    {
      date: t("resume.experiences.highdi.date"),
      title: t("resume.experiences.highdi.title"),
      institution: t("resume.experiences.highdi.institution"),
      description: t("resume.experiences.highdi.description"),
      technologies: [
        "React",
        "Laravel",
        "PostgreSQL",
        "Bootstrap",
        "Material UI",
        "Fedapay",
      ],
      demoUrl: "https://piam.highdi.ch/",
    },
  ];

  return (
    <section
      id="summary"
      className="animate-section text-[#FAFAFA] py-12 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header with large title */}
        <div className="relative mb-10 sm:mb-16 lg:mb-20">
          <h2 className="shine-effect text-4xl sm:text-5xl md:text-5xl font-bold absolute top-0 left-0 z-0">
          {t("resume.title")}
          </h2>
          <div className="h-10 sm:h-12" />
        </div>

        {/* Experience Section */}
        <div className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experienceItems.map((experience, index) => (
              <div
                key={index}
                className="animate-card glass-card rounded-2xl p-6 sm:p-7"
              >
                <div className="text-primary font-semibold mb-2 text-sm sm:text-base">
                  {experience.date}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-primary">
                  {experience.title}, {experience.institution}
                </h3>
                <p className="text-white text-sm sm:text-base leading-relaxed mb-4">
                  {experience.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1.5 bg-white/5 text-white text-xs rounded-full border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Download CV Button */}
        <div className="flex justify-start mt-12">
          <a
            href={cvPdf}
            download="wisdomfoli_cv.pdf"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white rounded-full hover:bg-primary/80 transition-colors font-medium text-base sm:text-lg"
          >
            <Download className="w-5 h-5" />
            <span>Download CV</span>
          </a>
        </div>
      </div>
    </section>
  );
}
