import React, { useContext } from 'react';
import { SharedContext } from '../contexts/SharedContext';
import theme from '../styles/globals.module.css';
import styles from '../styles/AddFriend.module.css';

const AddFriend = () => {
  const {
    isMobile,
    isDarkMode,
    toggleChatFeedVisibility,
    showAddFriendComponent,
    toggleAddFriendVisibility,
  } = useContext(SharedContext);
  if (isMobile) {
    return (
      <div className={styles.mobile_container__addfriend}>
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
      <div  id={isDarkMode ? theme.dark : theme.light} className={styles.desktop_container__addfriend}>
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
