import { createContext, useContext, ReactNode } from 'react';
import { useFavoriteBarVisibility } from '@/hooks/useFavoriteBarVisibility';

interface FavoriteBarContextType {
  isVisible: boolean;
  toggleVisibility: () => void;
}

const FavoriteBarContext = createContext<FavoriteBarContextType | undefined>(undefined);

export function useFavoriteBar() {
  const context = useContext(FavoriteBarContext);
  if (!context) {
    throw new Error('useFavoriteBar must be used within a FavoriteBarProvider');
  }
  return context;
}

interface FavoriteBarProviderProps {
  children: ReactNode;
}

export function FavoriteBarProvider({ children }: FavoriteBarProviderProps) {
  const { isVisible, toggleVisibility } = useFavoriteBarVisibility();

  return (
    <FavoriteBarContext.Provider value={{ isVisible, toggleVisibility }}>
      {children}
    </FavoriteBarContext.Provider>
  );
}