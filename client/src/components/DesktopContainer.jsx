import React from 'react';
import ChatFeed from './ChatFeed';
import Chat from './Chat';
import Settings from './Settings';
import styles from '../styles/DesktopContainer.module.css';

const DesktopContainer = ({ isMobile, isDarkMode, toggleDarkMode }) => {
  return (
    <div className={styles.container_desktop}>
      <ChatFeed isMobile={isMobile} isDarkMode={isDarkMode} />
      <Chat isMobile={isMobile} isDarkMode={isDarkMode} />
      <Settings
        isMobile={isMobile}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />
    </div>
  );
};

export default DesktopContainer;
