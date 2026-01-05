import { Download } from "lucide-react";
import cvPdf from "../assets/files/Wisdom Foli CV.pdf (4).pdf";

export default function Resume() {
  const educationItems = [
    {
      date: "2020-2021",
      title: "Scientific High School Diploma",
      institution: "LYCEE BG POUSSINETS",
      description:
        "Completed a scientific curriculum with a strong focus on mathematics, physics, and life sciences, building a solid foundation for higher education in technology and science-related fields.",
    },
    {
      date: "2023-2024",
      title: "Bachelor's Degree of Computer Science",
      institution: "ESIBA-IS",
      description:
        "Gained strong foundations in computer science, including programming, algorithms, databases, and software development, with hands-on projects focused on real-world problem solving.",
    },
  ];

  const experienceItems = [
    {
      date: "October 2024 - April 2025",
      title: "Application Developer Intern",
      institution: "HIGHDI",
      description: "HIGHDI is a company in its early stages, focused on the digital sector. As an intern developer, I have participated and contributed to the development of the company's projects."
    },    
    {
      date: "April 2025 - December 2025",
      title: "Software Developer",
      institution: "THEPOTENTIALAI",
      description:
        "ThePotentialAI is a company that provides software development solutions for businesses. As a software developer, I have contributed to multiple projects and application development.",
    },
  ];

  return (
    <section
      id="summary"
      className="animate-section text-black min-h-screen py-16 px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header with large title */}
        <div className="relative mb-20">
          {/* <h1 className="text-6xl md:text-6xl font-bold relative z-10">
            Resume
          </h1> */}
          <h1 className="shine-effect text-5xl md:text-[6rem] font-bold absolute top-0 left-0 -z-0">
            Summary
          </h1>
        </div>

        {/* Introductory text */}
        {/* <p className="text-gray-600 mb-16 max-w-3xl text-lg">
        As a developer, I am passionate about building modern, high-performing digital solutions that solve real-world problems. I specialize in web and mobile technologies, with a strong focus on creating intuitive, user-friendly applications that deliver real value to users.
        </p> */}

        {/* Two-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education Column */}
          <div className="space-y-8">
            {educationItems.map((item, index) => (
              <div
                key={index}
                className="animate-card bg-gray-50 rounded-lg p-6 border border-gray-200"
              >
                <div className="text-[#96031A] font-semibold mb-2">
                  {item.date}
                </div>
                <h3 className="text-[#96031A] text-xl font-semibold mb-2">
                  {item.title}
                </h3>
                <div className="text-gray-600 text-sm mb-4">
                  {item.institution}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Experience Column */}
          <div className="space-y-8">
            {experienceItems.map((item, index) => (
              <div
                key={index}
                className="animate-card bg-gray-50 rounded-lg p-6 border border-gray-200"
              >
                <div className="text-[#96031A] font-semibold mb-2">
                  {item.date}
                </div>
                <h3 className="text-[#96031A] text-xl font-semibold mb-2">
                  {item.title}
                </h3>
                <div className="text-gray-600 text-sm mb-4">
                  {item.institution}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Download CV Button */}
        <div className="flex justify-start mt-12">
          <a
            href={cvPdf}
            download="Wisdom Foli CV.pdf"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#96031A] text-white rounded-full hover:bg-[#96031A]/80] transition-colors font-medium text-lg"
          >
            <Download className="w-5 h-5" />
            <span>Download CV</span>
          </a>
        </div>
      </div>
    </section>
  );
}
