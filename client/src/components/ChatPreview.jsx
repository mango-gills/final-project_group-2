import React, { useContext } from 'react';
import { SharedContext } from '../contexts/SharedContext';
import moment from 'moment';
import styles from '../styles/ChatPreview.module.css';
import defaultProfilePic from '../assets/images-avatars/placeholder_avatar.png';

const ChatPreview = ({ selectUser, currUser }) => {
  const { isMobile, toggleChatVisibility, toggleChatFeedVisibility } =
    useContext(SharedContext);

  // MOBILE STYLES
  if (isMobile) {
    return (
      <div
        className={styles.mobile_chatcard__wrapper}
        onClick={() => {
          toggleChatVisibility(true);
          toggleChatFeedVisibility(false);
        }}
      >
        <div className={styles.mobile_chatcard__avatar_wrapper}>
          <img
            className={styles.mobile_chatcard__avatar_image}
            src={currUser.avatar}
          />
        </div>
        <div className={styles.mobile_chatcard__text_wrapper}>
          <p className={styles.mobile_chatcard__text_sender}>{currUser.name}</p>
          <p className={styles.mobile_chatcard__text_messages}>
            {/* {messageObject.message} */}
            {/*{`${messageObject.message} ${moment(messageObject.timestamp).fromNow()}`} */}
          </p>
        </div>
        <div className={styles.mobile_chatcard__timestamp}>
          {moment(messageObject.timestamp).fromNow()}
        </div>
      </div>
    );
  }

  // DESKTOP STYLES
  return (
    <div
      className={styles.desktop_wrapper__chatpreview}
      onClick={() => {
        selectUser(currUser);
        // code to show message in Chat.jsx component
      }}
    >
      <div className={styles.desktop_chatpreview__wrapper_avatar}>
        <img
          className={styles.desktop_avatar__image}
          src={currUser.avatar || defaultProfilePic}
        />
      </div>
      <div className={styles.desktop_chatpreview__wrapper_text}>
        <p className={styles.desktop_text__friendname}>{currUser.name}</p>
        <p className={styles.desktop_text__message}>
          {/* {messageObject.message} */}
          {/*{`${messageObject.message} ${moment(messageObject.timestamp).fromNow()}`} */}
        </p>
        <div
          className={`user_status ${currUser.isOnline ? 'online' : 'offline'}`}
        ></div>
      </div>
      {/*
        
        <div className={styles.desktop_timestamp}>
        moment(messageObject.timestamp).fromNow()
        </div>
    */}
    </div>
  );
};

export default ChatPreview;
