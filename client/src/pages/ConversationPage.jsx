import React, { useState, useEffect } from 'react';
import DesktopContainer from '../components/DesktopContainer';
import MobileContainer from '../components/MobileContainer';

const ConversationPage = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isDarkMode, toggleDarkMode] = useState(false);
  const [isMobile, setIsMobile] = useState(width <= 768);
  const [showAddFriendComponent, toggleAddFriendVisibility] = useState(false);
  const [showUploadAvatarComponent, toggleUploadAvatarVisibility] =
    useState(false);
  const [showChangePasswordComponent, toggleChangePasswordVisibility] =
    useState(false);

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
          showAddFriendComponent={showAddFriendComponent}
          toggleAddFriendVisibility={toggleAddFriendVisibility}
          showUploadAvatarComponent={showUploadAvatarComponent}
          toggleUploadAvatarVisibility={toggleUploadAvatarVisibility}
          showChangePasswordComponent={showChangePasswordComponent}
          toggleChangePasswordVisibility={toggleChangePasswordVisibility}
        />
      ) : (
        <DesktopContainer
          isMobile={isMobile}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
          showAddFriendComponent={showAddFriendComponent}
          toggleAddFriendVisibility={toggleAddFriendVisibility}
          showUploadAvatarComponent={showUploadAvatarComponent}
          toggleUploadAvatarVisibility={toggleUploadAvatarVisibility}
          showChangePasswordComponent={showChangePasswordComponent}
          toggleChangePasswordVisibility={toggleChangePasswordVisibility}
        />
      )}
    </div>
  );
};

export default ConversationPage;
