import React from 'react';
import moment from 'moment';
import styles from '../styles/ChatPreview.module.css';

const ChatPreview = ({
  isMobile,
  messageObject,
  showChat,
  toggleChatVisibility,
  showChatFeed,
  toggleChatFeedVisibility,
}) => {
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
            src={messageObject.senderAvatar}
          />
        </div>
        <div className={styles.mobile_chatcard__text_wrapper}>
          <p className={styles.mobile_chatcard__text_sender}>
            {messageObject.senderName}
          </p>
          <p className={styles.mobile_chatcard__text_messages}>
            {messageObject.message}
            {/*{`${messageObject.message} ${moment(messageObject.timestamp).fromNow()}`} */}
          </p>
        </div>
        <div className={styles.mobile_chatcard__timestamp}>
          {moment(messageObject.timestamp).fromNow()}
        </div>
      </div>
    );
  }

  return (
    <div
      className={styles.desktop_wrapper__chatpreview}
      onClick={() => {
        // code to show message in Chat.jsx component
      }}
    >
      <div className={styles.desktop_chatpreview__wrapper_avatar}>
        <img
          className={styles.desktop_avatar__image}
          src={messageObject.senderAvatar}
        />
      </div>
      <div className={styles.desktop_chatpreview__wrapper_text}>
        <p className={styles.desktop_text__friendname}>
          {messageObject.senderName}
        </p>
        <p className={styles.desktop_text__message}>
          {messageObject.message}
          {/*{`${messageObject.message} ${moment(messageObject.timestamp).fromNow()}`} */}
        </p>
      </div>
      <div className={styles.desktop_timestamp}>
        {moment(messageObject.timestamp).fromNow()}
      </div>
    </div>
  );
};

export default ChatPreview;
