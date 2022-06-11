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
        className={styles.chatcard__wrapper}
        onClick={() => {
          toggleChatVisibility(true);
          toggleChatFeedVisibility(false);
        }}
      >
        <div className={styles.chatcard__avatar_wrapper}>
          <img
            className={styles.chatcard__avatar_image}
            src={messageObject.senderAvatar}
          />
        </div>
        <div className={styles.chatcard__text_wrapper}>
          <p className={styles.chatcard__text_sender}>
            {messageObject.senderName}
          </p>
          <p className={styles.chatcard__text_messages}>
            {messageObject.message}
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
      className={styles.chatcard__wrapper}
      onClick={() => {
        toggleChatVisibility(true);
        toggleChatFeedVisibility(false);
      }}
    >
      <div className={styles.chatcard__avatar_wrapper_desktop}>
        <img
          className={styles.chatcard__avatar_image}
          src={messageObject.senderAvatar}
        />
      </div>
      <div className={styles.chatcard__text_wrapper}>
        <p className={styles.chatcard__text_sender}>
          {messageObject.senderName}
        </p>
        <p className={styles.chatcard__text_messages}>
          {messageObject.message}
          {/*{`${messageObject.message} ${moment(messageObject.timestamp).fromNow()}`} */}
        </p>
      </div>
      <div className={styles.chatcard__timestamp}>
        {moment(messageObject.timestamp).fromNow()}
      </div>
    </div>
  );
};

export default ChatPreview;
