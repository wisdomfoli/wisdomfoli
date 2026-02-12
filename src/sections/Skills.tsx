import { Code, Server, Smartphone, Cloud } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const skillCategories = [
    {
      icon: Code,
      title: t("skills.categories.frontend"),
      skills: [
        { name: "HTML5 / CSS3", percentage: 90 },
        { name: "JavaScript / TypeScript", percentage: 85 },
        { name: "React / Next.js", percentage: 85 },
        { name: "Bootstrap / Tailwind CSS", percentage: 85 },
      ],
    },
    {
      icon: Server,
      title: t("skills.categories.backend"),
      skills: [
        { name: "Django", percentage: 80 },
        { name: "Spring Boot", percentage: 70 },
        { name: "Node Js", percentage: 80 },
      ],
    },
    {
      icon: Smartphone,
      title: t("skills.categories.mobile"),
      skills: [
        { name: "Expo React Native", percentage: 85 },
        { name: "iOS / Swift", percentage: 0 },
        { name: "Android/Kotlin", percentage: 0 },
      ],
    },
    {
      icon: Cloud,
      title: t("skills.categories.database"),
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
    <section ref={sectionRef} id="skills" className="animate-section text-[#FAFAFA] py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with large title */}
        <div className="relative mb-16 sm:mb-20">
          <h2 className="shine-effect text-4xl sm:text-5xl md:text-5xl font-bold absolute top-0 left-0 z-0">
            {t("skills.title")}
          </h2>
          <div className="h-10 sm:h-12" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="animate-card glass-card rounded-2xl p-6 border border-white/10"
            >
              {/* Icon and Title */}
              <div className="mb-6">
                <div className="mb-3">
                  <category.icon className="size-8 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl text-primary font-bold">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-white/70">{skill.name}</span>
                      <span className="text-sm font-medium text-white/80">
                        {skill.percentage}%
                      </span>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div
                        className="progress-bar-fill bg-white rounded-full h-2"
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
