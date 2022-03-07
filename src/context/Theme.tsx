import { createContext, useContext } from 'react';

import { ThemeContextProps } from 'types/IContext';
import useLocalStorage from 'use-local-storage';

const Theme = createContext<ThemeContextProps>({} as ThemeContextProps);

export function ThemeProvider({ children }: any) {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light'
  );

  function switchTheme() {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  return (
    <Theme.Provider
      value={{
        theme,
        switchTheme,
      }}
    >
      {children}
    </Theme.Provider>
  );
}

export function useTheme() {
  const context = useContext(Theme);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
