import { Code, Server, Smartphone, Cloud } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend",
      skills: [
        { name: "HTML5 / CSS3", percentage: 90 },
        { name: "JavaScript / TypeScript", percentage: 85 },
        { name: "React / Next.js", percentage: 85 },
        { name: "Bootstrap / Tailwind CSS", percentage: 85 },
      ],
    },
    {
      icon: Server,
      title: "Backend",
      skills: [
        { name: "Django", percentage: 80 },
        { name: "Spring Boot", percentage: 70 },
        { name: "Node Js", percentage: 80 },
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile",
      skills: [
        { name: "Expo React Native", percentage: 85 },
        { name: "iOS/Swift", percentage: 0 },
        { name: "Android/Kotlin", percentage: 0 },
      ],
    },
    {
      icon: Cloud,
      title: "Database & Cloud",
      skills: [
        { name: "PostgreSQL", percentage: 80 },
        { name: "MySql", percentage: 70 },
        { name: "MongoDB", percentage: 60 },
        { name: "SQLite", percentage: 70 },
      ],
    },
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    const progressBars = sectionRef.current.querySelectorAll(".progress-bar-fill");
    
    // Initialiser toutes les barres à 0%
    gsap.set(progressBars, { width: "0%" });

    let hasAnimated = false;

    // Créer une animation avec ScrollTrigger pour toutes les barres
    const scrollTrigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 80%",
      onEnter: () => {
        if (!hasAnimated) {
          hasAnimated = true;
          progressBars.forEach((bar) => {
            const percentage = bar.getAttribute("data-percentage");
            if (percentage) {
              gsap.to(bar, {
                width: `${percentage}%`,
                duration: 1.5,
                ease: "power2.out",
              });
            }
          });
        }
      },
    });

    return () => {
      scrollTrigger.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="animate-section text-black py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with large title */}
        <div className="relative mb-20">
          {/* <h1 className="text-6xl md:text-6xl font-bold relative z-10">
            Skills
          </h1> */}
          <h1 className="shine-effect text-5xl md:text-[6rem] font-bold absolute top-0 left-0 -z-0">
            Skills
          </h1>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gray-50 rounded-lg p-6 border border-gray-200"
            >
              {/* Icon and Title */}
              <div className="mb-6">
                <div className="mb-3">
                  <category.icon className="w-10 h-10 text-[#96031A]" />
                </div>
                <h3 className="text-2xl text-[#96031A] font-bold">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-600">{skill.name}</span>
                      <span className="text-sm font-medium">
                        {skill.percentage}%
                      </span>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full bg-white rounded-full h-2">
                      <div
                        className="progress-bar-fill bg-black rounded-full h-2"
                        data-percentage={skill.percentage}
                        style={{ width: "0%" }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
