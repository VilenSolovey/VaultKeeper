import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FontSizeContext = createContext();

export const FontSizeProvider = ({ children }) => {
  const [fontSize, setFontSize] = useState(17);

  useEffect(() => {
    const getFontSize = async () => {
      const storedFontSize = await AsyncStorage.getItem('fontSize');
      if (storedFontSize) {
        setFontSize(parseInt(storedFontSize));
      }
    };
    getFontSize();
  }, []);

  const changeFontSize = async (size) => {
    setFontSize(size);
    await AsyncStorage.setItem('fontSize', size.toString());
  };

  return (
    <FontSizeContext.Provider value={{ fontSize, changeFontSize }}>
      {children}
    </FontSizeContext.Provider>
  );
};

export const useFontSize = () => useContext(FontSizeContext);
