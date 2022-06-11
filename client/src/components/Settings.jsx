import React from 'react';
import styles from '../styles/Settings.module.css';
import defaultProfilePic from '../assets/images-avatars/placeholder_avatar.png';
import DarkModeToggle from './DarkModeToggle';

const Settings = ({
  isMobile,
  isDarkMode,
  toggleDarkMode,
  showSettings,
  toggleSettingsVisibility,
  showChatFeed,
  toggleChatFeedVisibility,
}) => {
  //Mobile Version
  if (isMobile) {
    return (
      <div>
        <p>Settings</p>
        <button
          onClick={() => {
            toggleSettingsVisibility(false);
            toggleChatFeedVisibility(true);
          }}
        >
          Go back
        </button>
      </div>
    );
  }

  // Desktop Style
  return (
    <div>
      <div>
        <img src={defaultProfilePic} alt="" />
        <h2>User Name</h2>
        <span>User Status</span>
      </div>
      <div>
        <h3>Settings</h3>
        <div>Upload profile picture</div>
        <div>Update password</div>
      </div>

      <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      <button>Logout</button>
    </div>
  );
};

export default Settings;
