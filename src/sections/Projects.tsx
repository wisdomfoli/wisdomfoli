import { ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "ProxyGo",
      description:
        "Mobile transportation application with real-time tracking and WebSocket-based communication.",
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
      title: "Piam",
      description:
        "E-commerce platform for product sales and article listings with integrated payment processing.",
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
      title: "Mladoctors",
      description:
        "Non-profit organization website for young healthcare professionals with membership management and payment integration.",
      technologies: ["React", "Tailwind", "Paygate"],
      codeUrl: "#",
      demoUrl: "https://mladoctors.org/",
    },
    {
      title: "Meditrack",
      description:
        "Comprehensive clinic management system with provider and patient portals for exams, results, hospitalizations, pharmacies, and insurance.",
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
    <section id="projects" className="animate-section text-black py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with large title */}
        <div className="relative mb-20">
          <h1 className="shine-effect text-5xl md:text-[6rem] font-bold absolute top-0 left-0 -z-0">
            Projects
          </h1>
        </div>

        {/* Projects Grid - 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="animate-card bg-gray-50 rounded-lg p-6 border border-gray-200"
            >
              {/* Title */}
              <h2 className="text-2xl font-bold mb-4 text-[#96031A]">
                {project.title}
              </h2>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-4 py-2 bg-white text-gray-700 text-xs rounded-full border border-[#96031A]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                {/* <a
                  href={project.codeUrl}
                  className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors text-sm"
                >
                  <Github className="w-4 h-4 text-[#96031A]" />
                  <span>Code</span>
                </a> */}
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors text-sm"
                >
                  <ExternalLink className="w-4 h-4 text-[#96031A]" />
                  <span>Demo</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

