import React, { createContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { appTheme } from '../../styles/theme';

const ModeContext = createContext({
  mode: 'dark',
  themes: {},
  currentTheme: {},
});

interface ContextProps {
  mode?: string;
  themes?: any;
  children: any;
  currentTheme?: any;
}

export const AppModeProvider = (props: ContextProps) => {
  const { mode = 'dark', themes = appTheme, children } = props;

  return (
    <ModeContext.Provider
      value={{
        mode,
        themes,
        currentTheme: mode === 'dark' ? appTheme.darkMode : appTheme.lightMode,
      }}
    >
      <ThemeProvider
        theme={mode === 'dark' ? appTheme.darkMode : appTheme.lightMode}
      >
        {children}
      </ThemeProvider>
    </ModeContext.Provider>
  );
};

export default ModeContext;
