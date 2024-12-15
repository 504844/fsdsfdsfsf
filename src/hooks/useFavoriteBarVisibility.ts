import { useState, useEffect } from 'react';

const VISIBILITY_KEY = 'kada-kasis-favorite-bar-visible';

export function useFavoriteBarVisibility() {
  const [isVisible, setIsVisible] = useState(() => {
    const stored = localStorage.getItem(VISIBILITY_KEY);
    return stored === null ? true : stored === 'true';
  });

  useEffect(() => {
    localStorage.setItem(VISIBILITY_KEY, isVisible.toString());
  }, [isVisible]);

  const toggleVisibility = () => setIsVisible(prev => !prev);

  return { isVisible, toggleVisibility };
}