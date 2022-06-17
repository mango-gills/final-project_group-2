import React, { useEffect, useState } from 'react';
import moment from 'moment';
import styles from '../styles/ChatPreview.module.css';
import defaultProfilePic from '../assets/images-avatars/placeholder_avatar.png';
import { onSnapshot, doc } from 'firebase/firestore';
import { db } from '../firebase';

const ChatPreview = ({
  user,
  chat,
  user1,
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

  const user2 = currUser?.uid;
  const [data, setData] = useState('');

  useEffect(() => {
    const id = user1 > user2 ? `${user1 + user2}` : `${user2 + user1}`;
    let unsub = onSnapshot(doc(db, 'lastMsg', id), (doc) => {
      setData(doc.data());
    });
    return () => unsub;
  }, []);

  console.log(chat);
  return (
    <div
      className={styles.wrapper__chatpreview}
      // `${
      //   chat.name === currUser.name && 'selected_user'
      // }`
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
        {data?.from !== user1 && data?.unread && <p>new</p>}

        {data && (
          <p className={styles.text__message}>
            {data.from === user1 ? 'me' : null} {data.text}{' '}
          </p>
        )}
        {/* {messageObject.message} */}
        {/*{`${messageObject.message} ${moment(messageObject.timestamp).fromNow()}`} */}

        <div
          className={`user_status ${currUser.isOnline ? 'online' : 'offline'}`}
        >
          STATUS
        </div>
      </div>
      <div className={styles.timestamp}>
        {/* {moment(messageObject.timestamp).fromNow()} */}
      </div>
    </div>
  );
};

export default ChatPreview;
