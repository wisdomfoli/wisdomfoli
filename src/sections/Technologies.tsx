import reactIcon from "../assets/icons/react.svg";
import javaIcon from "../assets/icons/java.svg";
import mongodbIcon from "../assets/icons/mongodb.svg";
import postgresqlIcon from "../assets/icons/postgresql.svg";
import dockerIcon from "../assets/icons/docker.svg";
import gitIcon from "../assets/icons/git.svg";
import { useTranslation } from "react-i18next";

export default function Technologies() {
  const { t } = useTranslation();
  const technologies = [
    {
      name: "React",
      icon: reactIcon,
    },
    {
      name: "Java",
      icon: javaIcon,
    },
    {
      name: "MongoDB",
      icon: mongodbIcon,
    },
    {
      name: "PostgreSQL",
      icon: postgresqlIcon,
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "Docker",
      icon: dockerIcon,
    },
    {
      name: "Git",
      icon: gitIcon,
    },
    {
      name: "GitHub",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "Spring Boot",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "FastAPI",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
    },
    {
      name: "Svelte",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg",
    },
  ];

  return (
    <section id="technologies" className="animate-section text-[#FAFAFA] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with large title */}
        <div className="relative mb-6">
          <h2 className="shine-effect text-4xl sm:text-5xl md:text-5xl font-bold absolute top-0 left-0 z-0">
            {t("technologies.title")}
          </h2>
          <div className="h-10 sm:h-12" />
        </div>

        {/* My Arsenal Button */}
        {/* <div className="flex justify-center mb-8">
          <button className="bg-black border border-gray-300 rounded-full px-6 py-2 text-white text-sm font-medium hover:border-gray-400 transition-colors">
            My Arsenal
          </button>
        </div> */}

        {/* Tech Stack Title with Blue Underline */}
        {/* <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-[#FAFAFA] mb-4">
            Tech Stack
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div> */}

        {/* Technologies Grid - Two Rows */}
        <div className="flex flex-col gap-10 sm:gap-12 mb-8">
          {/* First Row */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {technologies.slice(0, 11).map((tech, index) => (
              <div
                key={index}
                className="group flex items-center justify-center size-12 sm:size-14 transition-transform duration-300 hover:scale-110"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
          {/* Second Row */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {technologies.slice(11).map((tech, index) => (
              <div
                key={index + 11}
                className="group flex items-center justify-center size-12 sm:size-14 transition-transform duration-300 hover:scale-110"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Footer Text */}
        {/* <div className="text-center">
          <p className="text-gray-300 text-sm md:text-base">
            I constantly try to improve my stack.
          </p>
        </div> */}
      </div>
    </section>
  );
}

