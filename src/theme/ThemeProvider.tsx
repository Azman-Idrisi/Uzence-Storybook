import React, { createContext, useContext, useEffect, useState } from 'react';
import { lightTheme, darkTheme } from './colors';

type Theme = typeof lightTheme;
type ThemeContextType = {
  theme: Theme;
  isDarkMode: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const theme = isDarkMode ? darkTheme : lightTheme;

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    // Apply theme variables to :root
    const root = document.documentElement;
    
    // Surface & Background
    root.style.setProperty('--surface-primary', theme.surface.primary);
    root.style.setProperty('--surface-secondary', theme.surface.secondary);
    root.style.setProperty('--surface-tertiary', theme.surface.tertiary);
    
    root.style.setProperty('--background-default', theme.background.default);
    root.style.setProperty('--background-subtle', theme.background.subtle);
    root.style.setProperty('--background-muted', theme.background.muted);
    root.style.setProperty('--background-emphasized', theme.background.emphasized);
    
    // Text Colors
    root.style.setProperty('--text-primary', theme.text.primary);
    root.style.setProperty('--text-secondary', theme.text.secondary);
    root.style.setProperty('--text-tertiary', theme.text.tertiary);
    root.style.setProperty('--text-disabled', theme.text.disabled);
    
    // Brand Colors
    root.style.setProperty('--brand-primary', theme.brand.primary);
    root.style.setProperty('--brand-primary-hover', theme.brand.primaryHover);
    root.style.setProperty('--brand-primary-active', theme.brand.primaryActive);
    root.style.setProperty('--brand-primary-subtle', theme.brand.primarySubtle);
    
    // Semantic Colors
    root.style.setProperty('--semantic-success', theme.semantic.success);
    root.style.setProperty('--semantic-warning', theme.semantic.warning);
    root.style.setProperty('--semantic-error', theme.semantic.error);
    root.style.setProperty('--semantic-info', theme.semantic.info);
    
    // Border Colors
    root.style.setProperty('--border-default', theme.border.default);
    root.style.setProperty('--border-subtle', theme.border.subtle);
    root.style.setProperty('--border-emphasized', theme.border.emphasized);
    
    // Update color scheme
    root.style.setProperty('color-scheme', isDarkMode ? 'dark' : 'light');
  }, [theme, isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <ThemeContext.Provider value={{ theme, isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}; 