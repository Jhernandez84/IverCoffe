"use client";

import { useState, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";

export const ThemeProvider = ({ children }) => {
  const [userThemePreference, setUserThemePreference] = useState("Dark");

  useEffect(() => {
    console.log(userThemePreference);
  }, [userThemePreference]);

  useEffect(() => {
    // Check if there's authentication data in localStorage
    const storedUserThemePreference = localStorage.getItem(
      "UserThemePreference"
    );
    if (storedUserThemePreference) {
      setUserThemePreference(JSON.parse(storedUserThemePreference));
    }
  }, []);

  const setUserThemeModeDark = () => {
    setUserThemePreference("Dark");
  };
  const setUserThemeModeLight = () => {
    setUserThemePreference("Light");
  };
  const setUserThemeModeSystem = () => {
    setUserThemePreference("system");
  };

  return (
    <ThemeContext.Provider
      value={{
        userThemePreference,
        setUserThemeModeDark,
        setUserThemeModeLight,
        setUserThemeModeSystem,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
