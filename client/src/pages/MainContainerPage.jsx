import React, { useState, useEffect } from 'react';
import DesktopContainer from '../components/DesktopContainer';
import MobileContainer from '../components/MobileContainer';

const MainContainerPage = () => {
  const [width, setWidth] = useState(window.innerWidth);

  //https://stackoverflow.com/questions/39435395/reactjs-how-to-determine-if-the-application-is-being-viewed-on-mobile-or-deskto
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;
  //   const isMobile = width <= 600;

  return <div>{isMobile ? <MobileContainer /> : <DesktopContainer />}</div>;
};

export default MainContainerPage;
