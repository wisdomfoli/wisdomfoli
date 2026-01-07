export default function Technologies() {
  const technologies = [
    {
      name: "React",
      icon: "/src/assets/icons/react.svg",
    },
    {
      name: "Java",
      icon: "/src/assets/icons/java.svg",
    },
    {
      name: "MongoDB",
      icon: "/src/assets/icons/mongodb.svg",
    },
    {
      name: "PostgreSQL",
      icon: "/src/assets/icons/postgresql.svg",
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
      icon: "/src/assets/icons/docker.svg",
    },
    {
      name: "Git",
      icon: "/src/assets/icons/git.svg",
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
      name: "AWS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
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
    <section id="technologies" className="animate-section text-black py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with large title */}
        <div className="relative mb-20">
          <h2 className="shine-effect text-5xl md:text-5xl font-bold absolute top-0 left-0 -z-0">
            Tech Stack
          </h2>
        </div>

        {/* My Arsenal Button */}
        {/* <div className="flex justify-center mb-8">
          <button className="bg-black border border-gray-300 rounded-full px-6 py-2 text-white text-sm font-medium hover:border-gray-400 transition-colors">
            My Arsenal
          </button>
        </div> */}

        {/* Tech Stack Title with Blue Underline */}
        {/* <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-black mb-4">
            Tech Stack
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div> */}

        {/* Technologies Grid - Two Rows */}
        <div className="flex flex-col gap-12 mb-16">
          {/* First Row */}
          <div className="flex flex-wrap justify-center gap-8">
            {technologies.slice(0, 11).map((tech, index) => (
              <div
                key={index}
                className="group flex items-center justify-center size-14 transition-transform duration-300 hover:scale-110"
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
          <div className="flex flex-wrap justify-center gap-8">
            {technologies.slice(11).map((tech, index) => (
              <div
                key={index + 11}
                className="group flex items-center justify-center size-18 transition-transform duration-300 hover:scale-110"
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
          <p className="text-gray-600 text-sm md:text-base">
            I constantly try to improve my stack.
          </p>
        </div> */}
      </div>
    </section>
  );
}

