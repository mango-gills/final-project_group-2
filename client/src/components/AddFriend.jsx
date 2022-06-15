import React from 'react';
import styles from '../styles/AddFriend.module.css';

const AddFriend = ({
  isMobile,
  isDarkMode,
  toggleDarkMode,
  showAddFriendComponent,
  toggleAddFriendVisibility,
  showChatFeed,
  toggleChatFeedVisibility
}) => {
  if (isMobile) {
    return (
      <div className={`${styles.mobile_container__addfriend} ${styles.mobile_backdrop_blur}`}>
      <div className={styles.mobile_wrapper__addfriend_form}>
        <form className={styles.mobile_addfriend__form}>
          <h2 className={styles.mobile_addfriend__header}>Find a friend</h2>
          <input
            className={styles.mobile_addfriend__input}
            placeholder="<username>#0000"
          />
          <button type="submit" className={styles.mobile_addfriend__button}>
            Start Talking
          </button>
        </form>
        <span
          className={styles.mobile_addfriend__goback}
          onClick={() => {
            toggleAddFriendVisibility(!showAddFriendComponent);
            toggleChatFeedVisibility(true);
          }}
        >
          Go Back to your Message Feed
        </span>
      </div>
      
    </div>

    );
  }

  return (
    <div className={`${styles.desktop_container__addfriend} ${styles.desktop_backdrop_blur}`}>
      <div className={styles.desktop_wrapper__addfriend_form}>
        <form className={styles.desktop_addfriend__form}>
          <h2 className={styles.desktop_addfriend__header}>Find a friend</h2>
          <input
            className={styles.desktop_addfriend__input}
            placeholder="<username>#0000"
          />
          <button type="submit" className={styles.desktop_addfriend__button}>
            Start Talking
          </button>
        </form>
        <span
          className={styles.desktop_addfriend__goback}
          onClick={() => {
            toggleAddFriendVisibility(!showAddFriendComponent);
          }}
        >
          Go Back to your Message Feed
        </span>
      </div>
    </div>
  );
};

export default AddFriend;
