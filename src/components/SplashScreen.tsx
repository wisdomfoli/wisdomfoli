import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [showLoading, setShowLoading] = useState(false);
  const loadingTimelineRef = useRef<gsap.core.Timeline | null>(null);
  const name = "Wisdom FOLI";

  // Animate loading dots when they appear
  useEffect(() => {
    if (!showLoading) return;

    // Wait for next frame to ensure DOM is updated
    requestAnimationFrame(() => {
      const dots = document.querySelectorAll(".loading-dot");
      if (dots.length > 0) {
        // Animate dots appearance
        gsap.to(dots, {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          stagger: 0.1,
          ease: "power2.out",
        });

        // Animate loading dots continuously
        loadingTimelineRef.current = gsap.timeline({ repeat: -1 });
        loadingTimelineRef.current.to(".loading-dot", {
          y: -10,
          duration: 0.6,
          stagger: 0.2,
          ease: "power2.inOut",
          yoyo: true,
          repeat: 1,
        });
      }
    });
  }, [showLoading]);

  useEffect(() => {
    const timeline = gsap.timeline();
    const letters = gsap.utils.toArray(".letter");

    // Animate letters with predefined fade and scale effect
    timeline.from(letters, {
      opacity: 0,
      scale: 0,
      y: 50,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.1,
    });

    // After name animation, show loading dots
    timeline.call(() => {
      setShowLoading(true);
    });

    // Wait a bit with loading dots
    timeline.to({}, { duration: 2.5 });

    // Stop loading animation
    timeline.call(() => {
      if (loadingTimelineRef.current) {
        loadingTimelineRef.current.kill();
      }
    });

    // Simple fade out transition
    timeline.to(".splash-container", {
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    });

    timeline.call(() => {
      if (loadingTimelineRef.current) {
        loadingTimelineRef.current.kill();
      }
      setIsVisible(false);
      onComplete();
    });

    return () => {
      timeline.kill();
      if (loadingTimelineRef.current) {
        loadingTimelineRef.current.kill();
      }
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="splash-container fixed inset-0 bg-[#0A0A0A] z-50 flex flex-col items-center justify-center px-4">
      <div className="flex items-center justify-center gap-0.5 sm:gap-1 md:gap-2 mb-4 sm:mb-6 md:mb-8">
        {name.split("").map((letter, index) => (
          <span
            key={index}
            id={`letter-${index}`}
            className="letter text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-primary"
            style={{
              display: "inline-block",
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </div>

      {showLoading && (
        <div className="flex items-center justify-center gap-2 sm:gap-3 mt-2 sm:mt-4">
          {[0, 1, 2].map((index) => (
            <span
              key={index}
              className="loading-dot w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-primary rounded-full opacity-0"
              style={{
                transform: "scale(0)",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
