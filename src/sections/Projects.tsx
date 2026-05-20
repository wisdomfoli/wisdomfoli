import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();
  const projects = [
    {
      title: t("projects.items.proxygo.title"),
      description: t("projects.items.proxygo.description"),
      technologies: [
        "Expo React Native",
        "Native Wind",
        "Redis",
        "Django Celery",
        "PostGIS",
        "PostgreSQL",
        "Django Channels",
      ],
      codeUrl: "#",
      demoUrl: "https://proxy-go.com/",
    },
    {
      title: t("projects.items.piam.title"),
      description: t("projects.items.piam.description"),
      technologies: [
        "React",
        "Laravel",
        "PostgreSQL",
        "Bootstrap",
        "Material UI",
        "Fedapay",
      ],
      codeUrl: "#",
      demoUrl: "https://piam.highdi.ch/",
    },
    {
      title: t("projects.items.mladoctors.title"),
      description: t("projects.items.mladoctors.description"),
      technologies: ["React", "Tailwind", "Paygate"],
      codeUrl: "#",
      demoUrl: "https://mladoctors.org/",
    },
    {
      title: t("projects.items.meditrack.title"),
      description: t("projects.items.meditrack.description"),
      technologies: [
        "Django",
        "React",
        "DRF",
        "Tailwind",
        "PostgreSQL",
      ],
      codeUrl: "#",
      demoUrl: "https://meditrack.cliniquevaleo.com/",
    }
  ];

  return (
    <section id="projects" className="animate-section text-[#FAFAFA] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with large title */}
        <div className="relative mb-6">
          <h1 className="shine-effect text-4xl sm:text-5xl md:text-5xl font-bold absolute top-0 left-0 z-0">
            {t("projects.title")}
          </h1>
          <div className="h-12 sm:h-16" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="animate-card glass-card rounded-2xl p-6 sm:p-7"
            >
              {/* Title */}
              <h2 className="text-xl sm:text-2xl font-bold mb-3 text-primary">
                {project.title}
              </h2>

              {/* Description */}
              <p className="text-white text-sm sm:text-base leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1.5 bg-white/5 text-white text-xs rounded-full border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              {/* <div className="flex gap-4">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
                >
                  <ExternalLink className="w-4 h-4 text-secondary" />
                  <span>Demo</span>
                </a>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

