import React, { useRef, useEffect } from 'react';
import styles from '../styles/Chat.module.css';
import defaultProfilePic from '../assets/images-avatars/placeholder_avatar.png';
import moment from 'moment';

const ChatMessage = ({ msg, user1, chat, user, stamp }) => {
  const scrollRef = useRef();

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [msg]);

  return (
    <div ref={scrollRef}>
      {msg.from === user1 ? (
        <div
          className={`${styles.wrapper__message} ${styles.wrapper__message_user}`}
        >
          {msg.media ? <img src={msg.media} alt={msg.text} /> : null}
          <div className={styles.message_user}>{msg.text}</div>
          <div className={styles.message__avatar_wrapper}>
            <img
              className={styles.message__avatar_image}
              src={user.avatar || defaultProfilePic}
              alt="avatar"
            />

            <p> {moment(msg?.createdAt.format).fromNow()}</p>
          </div>
        </div>
      ) : (
        <div
          className={`${styles.wrapper__message} ${styles.wrapper__message_friend}`}
        >
          <div className={styles.message__avatar_wrapper}>
            <img
              className={styles.message__avatar_image}
              src={chat.avatar || defaultProfilePic}
              alt="avatar"
            />
          </div>
          {msg.media ? <img src={msg.media} alt={msg.text} /> : null}
          <div className={styles.message_friend}>{msg.text}</div>
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
