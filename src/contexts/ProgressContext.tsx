import { createContext, useContext, type ReactNode } from 'react';
import { useProgressBar } from '../hooks/useProgressBar';
import ProgressBar from '../components/ProgressBar';

interface ProgressContextType {
  showProgress: () => void;
  hideProgress: () => void;
  isVisible: boolean;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const { isVisible, showProgress, hideProgress } = useProgressBar();

  return (
    <ProgressContext.Provider value={{ showProgress, hideProgress, isVisible }}>
      <ProgressBar isVisible={isVisible} onComplete={hideProgress} />
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
}