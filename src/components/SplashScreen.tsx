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

    // Exit animation: scale down and fade out
    timeline.to(".splash-container", {
      scale: 0.8,
      opacity: 0,
      duration: 0.8,
      ease: "power3.in",
    });

    // Exit animation for name letters
    timeline.to(
      letters,
      {
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
        stagger: 0.05,
        ease: "power2.in",
      },
      "<"
    );

    // Exit animation for loading dots
    timeline.to(
      ".loading-dot",
      {
        scale: 0,
        opacity: 0,
        duration: 0.4,
        stagger: 0.05,
        ease: "power2.in",
      },
      "<"
    );

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
    <div className="splash-container fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
      <div className="flex items-center justify-center gap-2 mb-8">
        {name.split("").map((letter, index) => (
          <span
            key={index}
            id={`letter-${index}`}
            className="letter text-7xl md:text-8xl lg:text-9xl font-bold text-[#96031A]"
            style={{
              display: "inline-block",
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </div>
      
      {showLoading && (
        <div className="flex items-center justify-center gap-3 mt-4">
          {[0, 1, 2].map((index) => (
            <span
              key={index}
              className="loading-dot w-4 h-4 bg-[#96031A] rounded-full opacity-0"
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

