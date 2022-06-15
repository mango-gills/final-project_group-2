import React from 'react';
import styles from '../styles/Settings.module.css';
import defaultProfilePic from '../assets/images-avatars/placeholder_avatar.png';
import DarkModeToggle from './DarkModeToggle';
import { auth, db } from '../firebase';
import { signOut } from 'firebase/auth';
import { updateDoc, doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const Settings = ({
  user,
  isMobile,
  isDarkMode,
  toggleDarkMode,
  showSettings,
  toggleSettingsVisibility,
  showChatFeed,
  toggleChatFeedVisibility,
  showUploadAvatarComponent,
  toggleUploadAvatarVisibility,
  showChangePasswordComponent,
  toggleChangePasswordVisibility,
}) => {
  const sampleLoggedInUser = {
    name: 'Ruth Rodriguez',
    online: true,
  };

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
  const navigate = useNavigate();
  const handleSignout = async () => {
    await updateDoc(doc(db, 'users', auth.currentUser.uid), {
      isOnline: false,
    });
    await signOut(auth);
    navigate('/');
  };
  // Desktop Style
  return (
    <div className={styles.container_settings}>
      <div className={styles.wrapper_profile}>
        <div className={styles.wrapper__image}>
          <img
            className={styles.profile__image}
            src={user?.avatar || defaultProfilePic}
            alt=""
          />
        </div>
        <h2 className={styles.profile__name}>{user?.name}</h2>
        <span className={styles.profile__status}>
          <span
            className={
              sampleLoggedInUser.online
                ? styles.profile__status_indicator_online
                : styles.profile__status_indicator_offline
            }
          ></span>{' '}
          {sampleLoggedInUser.online ? 'online' : 'offline'}
        </span>
      </div>
      <div className={styles.wrapper__settings}>
        <h3 className={styles.settings_header}>Settings</h3>
        <div
          className={styles.settings_option}
          onClick={() => {
            toggleUploadAvatarVisibility(!showUploadAvatarComponent);
          }}
        >
          Upload profile picture
        </div>
        <div
          className={styles.settings_option}
          onClick={() => {
            toggleChangePasswordVisibility(!showChangePasswordComponent);
          }}
        >
          Update password
        </div>
      </div>
      <div className={styles.wrapper__darkmode}>
        <span className={styles.darkmode_label}>Dark Mode</span>
        <DarkModeToggle
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
      </div>
      <button
        className={styles.settings__button_logout}
        onClick={handleSignout}
      >
        Logout
      </button>
    </div>
  );
};

export default Settings;
