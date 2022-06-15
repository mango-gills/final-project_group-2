import React, { useState } from 'react';
import ChatPreview from './ChatPreview';
import styles from '../styles/ChatFeed.module.css';
import defaultProfilePic from '../assets/images-avatars/placeholder_avatar.png';
import addPersonIcon from '../assets/icons/person_add_black_24dp.svg';

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

const ChatFeed = ({
  user1,
  selectUser,
  users,
  isMobile,
  isDarkMode,
  toggleDarkMode,
  showChat,
  toggleChatVisibility,
  showChatFeed,
  toggleChatFeedVisibility,
  showAddFriendComponent,
  toggleAddFriendVisibility,
}) => {
  // MOBILE VERSION
  if (isMobile) {
    return (
      <div className={styles.mobile_chatfeed__wrapper}>
        {/*<h2 style={{ color: 'red' }}>Messages</h2>*/}
          {sampleData2.map((messageObject) => (
            <ChatPreview
              isMobile={isMobile}
              messageObject={messageObject}
              showChat={showChat}
              toggleChatVisibility={toggleChatVisibility}
              showChatFeed={showChatFeed}
              toggleChatFeedVisibility={toggleChatFeedVisibility}
            />
          ))}
      </div>
    );
  }

  // DESKTOP VERSION

  return (
    <div className={styles.desktop_chatfeed__wrapper}>
      <div className={styles.desktop_chatfeed__header_wrapper}>
        <h2 className={styles.desktop_chatfeed__header_text}>Messages</h2>
        <button className={styles.desktop_chatfeed__header_button} onClick={()=>{
          toggleAddFriendVisibility(!showAddFriendComponent);
        }}>
          <img src={addPersonIcon} />
        </button>
      </div>
      <div className={styles.desktop_chatfeed__previews__wrapper}>
      {/*  {sampleData2.map((messageObject) => (
          <ChatPreview messageObject={messageObject} />
        ))} */}
        {users.map((currUser) => (
          <ChatPreview
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
