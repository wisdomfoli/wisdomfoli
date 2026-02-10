import { Download } from "lucide-react";
import cvPdf from "../assets/files/Wisdom Foli CV.pdf (4).pdf";

export default function Resume() {
  const experienceItems = [
    {
      date: "April 2025 - December 2025",
      title: "Software Developer",
      institution: "THEPOTENTIALAI",
      description:
        "Mobile transportation application with real-time tracking and WebSocket-based communication.",
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
      date: "October 2024 - April 2025",
      title: "Application Developer Intern",
      institution: "HIGHDI",
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
      demoUrl: "https://piam.highdi.ch/",
    },
  ];

  return (
    <section
      id="summary"
      className="animate-section text-[#FAFAFA] py-16 px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header with large title */}
        <div className="relative mb-20">
          <h2 className="shine-effect text-5xl md:text-5xl font-bold absolute top-0 left-0 -z-0">
          Experience
          </h2>
        </div>

        {/* Experience Section */}
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experienceItems.map((experience, index) => (
              <div
                key={index}
                className="animate-card bg-[#111111] rounded-lg p-6 border border-gray-600"
              >
                <div className="text-[#7f22ff] font-semibold mb-2">
                  {experience.date}
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#7f22ff]">
                  {experience.title}, {experience.institution}
                </h3>
                <p className="text-white text-sm leading-relaxed mb-4">
                  {experience.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-4 py-2 bg-gray-700 text-white text-sm rounded-full border border-gray-600"
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
            download="Wisdom Foli CV.pdf"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#7f22ff] text-white rounded-full hover:bg-[#7f22ff]/80] transition-colors font-medium text-lg"
          >
            <Download className="w-5 h-5" />
            <span>Download CV</span>
          </a>
        </div>
      </div>
    </section>
  );
}
