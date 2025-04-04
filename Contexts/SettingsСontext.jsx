import React, { createContext, useState, useEffect, useContext } from 'react';
import { getUserSetting, setUserSetting, createTable } from '../database/database2';
import i18n from '../locales/i18n';

const SettingsContext = createContext(null);

export const SettingsProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [language, setLanguage] = useState('en');
  const [fontSize, setFontSize] = useState(15);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSettings = async () => {
      await createTable();
      const storedTheme = await getUserSetting('theme');
      const storedLanguage = await getUserSetting('language');
      const storedFontSize = await getUserSetting('fontSize');
      
      if (storedTheme) setIsDarkTheme(storedTheme === 'dark');
      if (storedLanguage) {
        setLanguage(storedLanguage);
        i18n.changeLanguage(storedLanguage);
      }
      if (storedFontSize) setFontSize(parseInt(storedFontSize));

      setIsLoading(false);
    };

    fetchSettings();
  }, []);

  const toggleTheme = async () => {
    const newTheme = !isDarkTheme ? 'dark' : 'light';
    setIsDarkTheme(!isDarkTheme);
    await setUserSetting('theme', newTheme);
  };

  const changeLanguage = async (lng) => {
    setLanguage(lng);
    i18n.changeLanguage(lng);
    await setUserSetting('language', lng);
  };

  const changeFontSize = async (size) => {
    setFontSize(size);
    await setUserSetting('fontSize', size.toString());
  };

  return (
    <SettingsContext.Provider value={{
      isDarkTheme,
      toggleTheme,
      language,
      changeLanguage,
      fontSize,
      changeFontSize,
      isLoading,
    }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);
