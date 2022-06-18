import React, { useEffect, useState } from 'react';
import moment from 'moment';
import styles from '../styles/ChatPreview.module.css';
import defaultProfilePic from '../assets/images-avatars/placeholder_avatar.png';
import { onSnapshot, doc } from 'firebase/firestore';
import { db } from '../firebase';

const ChatPreview = ({
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
  const user2 = currUser?.uid;
  const [data, setData] = useState('');

  useEffect(() => {
    const id = user1 > user2 ? `${user1 + user2}` : `${user2 + user1}`;
    let unsub = onSnapshot(doc(db, 'lastMsg', id), (doc) => {
      setData(doc.data());
    });

    return () => unsub;
  }, []);

  const selectedUser = chat.uid === currUser.uid ? styles.selected_user : '';
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
    <>
      <div
        className={`${styles.wrapper__chatpreview} ${selectedUser}`}
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
          {data?.from !== user1 && data?.unread && (
            <p>
              <strong>New!</strong>
            </p>
          )}
          {currUser.isOnline ? (
            <span className={styles.user_status_online}></span>
          ) : (
            <span className={styles.user_status_offline}></span>
          )}
        </div>
        <div className={styles.chat__text__preview}>
          {data && (
            <p className={styles.text__message}>
              {data.from === user1 ? <strong>Me: </strong> : null}
              {data.media !== '' && data.from === user1
                ? 'Sent a Photo.'
                : data.text}
            </p>
          )}
          {data ? (
            <div className={styles.timestamp}>
              {moment(data.createdAt.toDate()).fromNow()}
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </>
  );
};

export default ChatPreview;
