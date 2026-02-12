import { useEffect, useState } from 'react';

interface ProgressBarProps {
  isVisible: boolean;
  onComplete?: () => void;
}

export default function ProgressBar({ isVisible, onComplete }: ProgressBarProps) {
  const [progress, setProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setIsAnimating(true);
      setProgress(0);
      
      // Simulation d'une progression de chargement
      const intervals: ReturnType<typeof setTimeout>[] = [];
      
      // Progression rapide au début
      intervals.push(setTimeout(() => setProgress(30), 100));
      intervals.push(setTimeout(() => setProgress(60), 300));
      intervals.push(setTimeout(() => setProgress(85), 500));
      intervals.push(setTimeout(() => setProgress(95), 700));
      
      // Finaliser et masquer
      intervals.push(setTimeout(() => {
        setProgress(100);
        setTimeout(() => {
          setIsAnimating(false);
          setProgress(0);
          onComplete?.();
        }, 200);
      }, 900));

      return () => {
        intervals.forEach(clearTimeout);
      };
    }
  }, [isVisible, onComplete]);

  if (!isAnimating) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-white/10 z-50 backdrop-blur-sm">
      <div
        className="h-full bg-primary transition-all duration-300 ease-out shadow-lg"
        style={{ 
          width: `${progress}%`,
          boxShadow: '0 0 10px rgba(71, 229, 188, 0.5)'
        }}
      />
    </div>
  );
}