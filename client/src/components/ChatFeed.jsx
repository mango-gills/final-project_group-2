import React, { useState } from 'react';
import ChatPreview from './ChatPreview';
import styles from '../styles/ChatFeed.module.css';
import defaultProfilePic from '../assets/images-avatars/placeholder_avatar.png';
import addPersonIcon from '../assets/icons/person_add_black_24dp.svg';

/*

6AYHXtSfMR
fMTSAEEHmr
Tx8HAGnu59
nMvYEVgyjw
cxnM4kRpCY

*/

// const sampleData = [
//   {
//     userId: '6AYHXtSfMR',
//     userName: 'Jim Kirk',
//     userAvatar: defaultProfilePic,
//     recipientId: 'Bea',
//     message: 'Lorem ipsim dolorem',
//     timestamp: Date(2022, 6, 9, 10, 33, 30, 0).toString(),
//     viewed: true,
//   },
//   {
//     senderId: '6AYHXtSfMR',
//     senderName: 'Camille',
//     senderAvatar: defaultProfilePic,
//     recipientId: 'Bea',
//     message:
//       'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
//     timestamp: Date(2022, 6, 9, 10, 45, 30, 0).toString(),
//     viewed: true,
//   },
//   {
//     senderId: 'Camille',
//     senderName: 'Camille',
//     senderAvatar: defaultProfilePic,
//     recipientId: 'Denise',
//     message:
//       'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.',
//     timestamp: Date(2022, 6, 9, 10, 50, 30, 0).toString(),
//     viewed: true,
//   },
//   {
//     senderId: 'Camille',
//     senderName: 'Camille',
//     senderAvatar: defaultProfilePic,
//     recipientId: 'Moe',
//     message:
//       'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
//     timestamp: Date(2022, 6, 9, 11, 17, 30, 0).toString(),
//     viewed: true,
//   },
//   {
//     senderId: 'Camille',
//     senderAvatar: defaultProfilePic,
//     recipientId: 'Inah',
//     message:
//       'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
//     timestamp: Date(2022, 6, 9, 11, 51, 30, 0).toString(),
//     viewed: true,
//   },
// ];

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
  isMobile,
  isDarkMode,
  toggleDarkMode,
  showChat,
  toggleChatVisibility,
  showChatFeed,
  toggleChatFeedVisibility,
  showAddFriendComponent, toggleAddFriendVisibility
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
        {sampleData2.map((messageObject) => (
          <ChatPreview messageObject={messageObject} />
        ))}
      </div>
    </div>
  );
};

export default ChatFeed;
