import { createContext, useContext, useEffect } from 'react';
import { useLocalStorage } from '../hooks/use-local-storage';

export const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useLocalStorage('app-theme', 'dark');

  const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'));

  // Застосовуємо data-theme до <html> — так CSS змінні діють на весь проєкт
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
}
