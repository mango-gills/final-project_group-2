import React from 'react';
import moment from 'moment';
import styles from '../styles/ChatPreview.module.css';
import defaultProfilePic from '../assets/images-avatars/placeholder_avatar.png';

const ChatPreview = ({
  selectUser,
  isMobile,
  currUser,
  showChat,
  toggleChatVisibility,
  showChatFeed,
  toggleChatFeedVisibility,
}) => {
  if (isMobile) {
    return (
      <div
        className={styles.chatcard__wrapper}
        onClick={() => {
          toggleChatVisibility(true);
          toggleChatFeedVisibility(false);
        }}
      >
        <div className={styles.chatcard__avatar_wrapper}>
          <img
            className={styles.chatcard__avatar_image}
            src={currUser.avatar}
          />
        </div>
        <div className={styles.chatcard__text_wrapper}>
          <p className={styles.chatcard__text_sender}>{currUser.name}</p>
          <p className={styles.chatcard__text_messages}>
            {/* {messageObject.message} */}
            {/*{`${messageObject.message} ${moment(messageObject.timestamp).fromNow()}`} */}
          </p>
        </div>
        <div className={styles.chatcard__timestamp}>
          {moment(messageObject.timestamp).fromNow()}
        </div>
      </div>
    );
  }

  return (
    <div
      className={styles.wrapper__chatpreview}
      onClick={() => {
        selectUser(currUser);
        // code to show message in Chat.jsx component
      }}
    >
      <div className={styles.chatpreview__wrapper_avatar}>
        <img
          className={styles.avatar__image}
          src={currUser.avatar || defaultProfilePic}
        />
      </div>
      <div className={styles.chatpreview__wrapper_text}>
        <p className={styles.text__friendname}>{currUser.name}</p>
        <p className={styles.text__message}>
          {/* {messageObject.message} */}
          {/*{`${messageObject.message} ${moment(messageObject.timestamp).fromNow()}`} */}
        </p>
        <div
          className={`user_status ${currUser.isOnline ? 'online' : 'offline'}`}
        ></div>
      </div>
      <div className={styles.timestamp}>
        {/* {moment(messageObject.timestamp).fromNow()} */}
      </div>
    </div>
  );
};

export default ChatPreview;
