import React, { useState, useContext } from 'react';

const SharedContext = React.createContext();

export const SharedProvider = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isDarkMode, toggleDarkMode] = useState(false);
  const [isMobile, setIsMobile] = useState(width <= 768);
  return (
    <SharedContext.Provider
      value={{width, setWidth, isDarkMode, toggleDarkMode, isMobile, setIsMobile}}
    >
      {children}
    </SharedContext.Provider>
  );
};
