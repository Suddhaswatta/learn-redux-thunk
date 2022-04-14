import { ThemeProvider } from "@mui/material/styles";
import React, { useState } from "react";
import getDesignTokens from "../constants/theme";
export const CustomThemeContext = React.createContext({
  currentTheme: "normal",
  setTheme: null,
});

export default function CustomThemeProvider(props) {
  const { children } = props;
  const currentTheme = "light";
  const [themeName, setThemeName] = useState(currentTheme);
  const theme = getDesignTokens(themeName);

  const contextValue = {
    currentTheme: themeName,
    setTheme: setThemeName,
  };

  return (
    <CustomThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CustomThemeContext.Provider>
  );
}
