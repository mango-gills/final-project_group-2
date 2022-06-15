import React from 'react';
import GoBackIcon from '../assets/icons/arrow_back_black_24dp.svg';
import PhoneCallIcon from '../assets/icons/call_black_24dp.svg';
import VideoCallIcon from '../assets/icons/video_call_black_24dp.svg';
import MenuIcon from '../assets/icons/menu_black_24dp.svg';
import InfoIcon from '../assets/icons/info_black_24dp.svg';
import SearchIcon from '../assets/icons/search_black_24dp.svg';
import styles from '../styles/HeaderMobileChat.module.css';
import GoBackIconTwo from '../assets/icons/west_black.svg';

const HeaderMobileChat = ({
  showChatFeed,
  toggleChatFeedVisibility,
  showChat,
  toggleChatVisibility,
}) => {

  const friendName = 'Ana de Armas';
  return (
    <div className={styles.header__container}>
      <div className={styles.wrapper_goback_button}>
        <button
          className={styles.goback_button}
          onClick={() => {
            toggleChatVisibility(false);
            toggleChatFeedVisibility(true);
          }}
        >
          <img className={styles.button__image} src={GoBackIconTwo} />
        </button>
      </div>
      <div className={styles.wrapper_friendname}>
        <p className={styles.friendname_text}>{friendName}</p>
      </div>
      <div className={styles.wrapper_addtl_buttons}>
        <button className={styles.addtl_button}>
          <img className={styles.button__image} src={SearchIcon} />
        </button>
        <button className={styles.addtl_button}>
          <img className={styles.button__image} src={PhoneCallIcon} />
        </button>
        <button className={styles.addtl_button}>
          <img className={styles.button__image} src={VideoCallIcon} />
        </button>
        <button className={styles.addtl_button}>
          <img className={styles.button__image} src={InfoIcon} />
        </button>
      </div>
    </div>
  );
};

export default HeaderMobileChat;
