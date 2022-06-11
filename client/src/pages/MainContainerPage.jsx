import React, { useState, useEffect } from 'react';
import DesktopContainer from '../components/DesktopContainer';
import MobileContainer from '../components/MobileContainer';

const MainContainerPage = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isDarkMode, toggleDarkMode] = useState(false);
  const [isMobile, setIsMobile] = useState(width <= 768);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  useEffect(() => {
    setIsMobile(width <= 768);
  }, [width]);

  return (
    <div>
      {isMobile ? (
        <MobileContainer
          isMobile={isMobile}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
      ) : (
        <DesktopContainer
          isMobile={isMobile}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
      )}
    </div>
  );
};

export default MainContainerPage;
