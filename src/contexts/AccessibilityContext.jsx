import { createContext, useContext, useState, useEffect, use } from 'react';

const AccessibilityContext = createContext();

export function AccessibilityProvider({ children }) {
  const [highContrast, setHighContrast] = useState(false);
  const [screenReader, setScreenReader] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    const savedContrast = localStorage.getItem('highContrast') === 'true';
    const savedFontSize = localStorage.getItem('fontSize');
    const savedScreenReader = localStorage.getItem('screenReader') === 'true';
    
    if (savedContrast) setHighContrast(true);
    if (savedFontSize) setFontSize(Number(savedFontSize));
    if (savedScreenReader) setScreenReader(true);
  }, []);

  useEffect(() => {
    if (highContrast) {
      document.documentElement.setAttribute('data-theme', 'high-contrast');
      localStorage.setItem('highContrast', 'true');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('highContrast', 'false');
    }
  }, [highContrast]);
  
  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
    localStorage.setItem('fontSize', fontSize.toString());
  }, [fontSize]);
  
  useEffect(() => {
    if(screenReader){
      document.documentElement.setAttribute('data-screen-reader', 'true');
      localStorage.setItem('screenReader', 'true');
  } else {
    document.documentElement.removeAttribute('data-screen-reader', 'true');
    localStorage.setItem('screenReader', 'false');
    }
  }, [screenReader]);

  return (
    <AccessibilityContext.Provider value={{ highContrast, setHighContrast, fontSize, 
    setFontSize, screenReader, setScreenReader }}>
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within AccessibilityProvider');
  }
  return context;
}
