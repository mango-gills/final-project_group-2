import React, { useState, useContext } from 'react';
import { SharedContext } from '../contexts/SharedContext';
import ChatPreview from './ChatPreview';
import theme from '../styles/globals.module.css';
import styles from '../styles/ChatFeed.module.css';
import defaultProfilePic from '../assets/images-avatars/placeholder_avatar.png';

const sampleData2 = [
  {
    senderAvatar: defaultProfilePic,
    senderName: 'Ana de Armas',
    message: 'hello',
    timestamp: new Date(2022, 5, 10, 10, 33, 30, 0),
  },
  {
    senderAvatar: defaultProfilePic,
    senderName: 'Ryan Gosling',
    message: 'Word words words words words words words words words',
    timestamp: new Date(2022, 5, 10, 10, 35, 30, 0),
  },
  {
    senderAvatar: defaultProfilePic,
    senderName: 'Ana de Armas',
    message: 'hello',
    timestamp: new Date(2022, 5, 10, 10, 33, 30, 0),
  },
  {
    senderAvatar: defaultProfilePic,
    senderName: 'Ana de Armas',
    message: 'hello',
    timestamp: new Date(2022, 5, 10, 10, 33, 30, 0),
  },
  {
    senderAvatar: defaultProfilePic,
    senderName: 'Ana de Armas',
    message: 'hello',
    timestamp: new Date(2022, 5, 10, 10, 33, 30, 0),
  },
  {
    senderAvatar: defaultProfilePic,
    senderName: 'Ana de Armas',
    message: 'hello',
    timestamp: new Date(2022, 5, 10, 10, 33, 30, 0),
  },
  {
    senderAvatar: defaultProfilePic,
    senderName: 'Ryan Gosling',
    message: 'Word words words words words words words words words',
    timestamp: new Date(2022, 5, 10, 10, 35, 30, 0),
  },
  {
    senderAvatar: defaultProfilePic,
    senderName: 'Ana de Armas',
    message: 'hello',
    timestamp: new Date(2022, 5, 10, 10, 33, 30, 0),
  },
  {
    senderAvatar: defaultProfilePic,
    senderName: 'Ana de Armas',
    message: 'hello',
    timestamp: new Date(2022, 5, 10, 10, 33, 30, 0),
  },
  {
    senderAvatar: defaultProfilePic,
    senderName: 'Ana de Armas',
    message: 'hello',
    timestamp: new Date(2022, 5, 10, 10, 33, 30, 0),
  },
];

const ChatFeed = ({ user, chat, user1, selectUser, users }) => {
  const {
    isMobile,
    isDarkMode,
    showAddFriendComponent,
    toggleAddFriendVisibility,
  } = useContext(SharedContext);

  // MOBILE VERSION
  if (isMobile) {
    return (
      <div className={styles.mobile_chatfeed__wrapper}>
        {/*<h2 style={{ color: 'red' }}>Messages</h2>*/}
        {sampleData2.map((messageObject) => (
          <ChatPreview messageObject={messageObject} />
        ))}
      </div>
    );
  }

  // DESKTOP VERSION

  return (
    <div
      id={isDarkMode ? theme.dark : theme.light}
      className={styles.desktop_chatfeed__wrapper}
    >
      <div className={styles.desktop_chatfeed__header_wrapper}>
        <h2 className={styles.desktop_chatfeed__header_text}>Messages</h2>
        <button
          className={styles.desktop_chatfeed__header_button}
          onClick={() => {
            toggleAddFriendVisibility(!showAddFriendComponent);
          }}
        >
          <i className="fas fa-solid fa-user-plus"></i>
        </button>
      </div>
      <div className={styles.desktop_chatfeed__previews__wrapper}>
        {users.map((currUser) => (
          <ChatPreview
            user={user}
            user1={user1}
            chat={chat}
            key={currUser.uid}
            currUser={currUser}
            selectUser={selectUser}
          />
        ))}
      </div>
    </div>
  );
};

export default ChatFeed;
