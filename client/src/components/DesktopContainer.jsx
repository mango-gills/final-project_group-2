import React from 'react';
import ChatFeed from './ChatFeed';
import Chat from './Chat';
import Settings from './Settings';
import AddFriend from './AddFriend';
import ChangePassword from './ChangePassword';
import UploadAvatar from './UploadAvatar';
import styles from '../styles/DesktopContainer.module.css';

const DesktopContainer = ({
  isMobile,
  isDarkMode,
  toggleDarkMode,
  showAddFriendComponent,
  toggleAddFriendVisibility,
  showUploadAvatarComponent,
  toggleUploadAvatarVisibility,
  showChangePasswordComponent,
  toggleChangePasswordVisibility,
}) => {
  console.log('Change Password Component', showChangePasswordComponent)
  return (
    <div className={styles.container_desktop}>
      <ChatFeed
        isMobile={isMobile}
        isDarkMode={isDarkMode}
        showAddFriendComponent={showAddFriendComponent}
        toggleAddFriendVisibility={toggleAddFriendVisibility}
      />
      <Chat isMobile={isMobile} isDarkMode={isDarkMode} />
      <Settings
        isMobile={isMobile}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        showChangePasswordComponent={showChangePasswordComponent}
        toggleChangePasswordVisibility={toggleChangePasswordVisibility}
        showUploadAvatarComponent={showUploadAvatarComponent}
        toggleUploadAvatarVisibility={toggleUploadAvatarVisibility}
      />
      {showAddFriendComponent ? (
        <AddFriend
          isMobile={isMobile}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
          showAddFriendComponent={showAddFriendComponent}
          toggleAddFriendVisibility={toggleAddFriendVisibility}
        />
      ) : (
        ''
      )}
      {showUploadAvatarComponent ? (
        <UploadAvatar
          isMobile={isMobile}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
          showUploadAvatarComponent={showUploadAvatarComponent}
          toggleUploadAvatarVisibility={toggleUploadAvatarVisibility}
        />
      ) : (
        ''
      )}
      {showChangePasswordComponent ? (
        <ChangePassword
          isMobile={isMobile}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
          showChangePasswordComponent={showChangePasswordComponent}
          toggleChangePasswordVisibility={toggleChangePasswordVisibility}
        />
      ) : (
        ''
      )}
    </div>
  );
};

export default DesktopContainer;
