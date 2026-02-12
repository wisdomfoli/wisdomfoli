import { useState } from 'react';

interface UseProgressBarReturn {
  isVisible: boolean;
  showProgress: () => void;
  hideProgress: () => void;
}

export function useProgressBar(): UseProgressBarReturn {
  const [isVisible, setIsVisible] = useState(false);

  const showProgress = () => setIsVisible(true);
  const hideProgress = () => setIsVisible(false);

  return {
    isVisible,
    showProgress,
    hideProgress,
  };
}