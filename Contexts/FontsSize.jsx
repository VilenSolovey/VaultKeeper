import React, { createContext, useState } from 'react';

const FontContext = createContext(undefined);

const FontProvider = ({ children }) => {
  const [fontSize, setFontSize] = useState(16);

  return (
    <FontContext.Provider value={{ fontSize, setFontSize }}>
      {children}
    </FontContext.Provider>
  );
};

export { FontContext, FontProvider };
