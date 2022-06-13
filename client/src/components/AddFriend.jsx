import React from 'react';
import styles from '../styles/AddFriend.module.css';

const AddFriend = ({
  isMobile,
  isDarkMode,
  toggleDarkMode,
  showAddFriendComponent,
  toggleAddFriendVisibility,
  blurBackground,
  toggleBlurBackground,
}) => {
  if (isMobile) {
    return (
      <div>
        <div>mobile add comononet</div>
      </div>
    );
  }

  return (
    <div className={`${styles.container__addfriend} ${styles.backdrop_blur}`}>
      <div className={styles.wrapper__addfriend_form}>
        <form className={styles.addfriend__form}>
          <h2 className={styles.addfriend__header}>Find a friend</h2>
          <input
            className={styles.addfriend__input}
            placeholder="<username>#0000"
          />
          <button type="submit" className={styles.addfriend__button}>
            Start Talking
          </button>
        </form>
        <span
          className={styles.addfriend__goback}
          onClick={() => {
            toggleAddFriendVisibility(!showAddFriendComponent);
          }}
        >
          Go Back to your Message Feed
        </span>
      </div>
      <div className={styles.container__addfriend_blur}></div>
    </div>
  );
};

export default AddFriend;
