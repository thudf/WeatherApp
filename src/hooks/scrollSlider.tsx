import React, { createContext, useCallback, useState, useContext } from 'react';

interface ScrollSliderContextData {
  scrollTo(pos: number): void;
  scrollPos: number;
}

const ScrollSliderContext = createContext<ScrollSliderContextData>(
  {} as ScrollSliderContextData,
);

export const ScrollSliderProvider: React.FC = ({ children }) => {
  const [scrollPos, setScrollPos] = useState(0);

  const scrollTo = useCallback((pos: number) => {
    setScrollPos(pos);
  }, []);

  return (
    <ScrollSliderContext.Provider
      value={{ scrollPos, scrollTo }}
    >
      {children}
    </ScrollSliderContext.Provider>
  );
};

export function useScrollSlider(): ScrollSliderContextData {
  const context = useContext(ScrollSliderContext);

  if (!context) {
    throw new Error('useScrollSlider must be used within an ScrollSliderProvider');
  }

  return context;
}
