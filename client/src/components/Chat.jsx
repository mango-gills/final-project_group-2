import React from 'react';
import defaultProfilePic from '../assets/images-avatars/placeholder_avatar.png';
import styles from '../styles/Chat.module.css';

const sampleChatData = [
  {
    senderAvatar: defaultProfilePic,
    senderId: '6AYHXtSfMR',
    message: 'hello',
    timestamp: Date(2022, 6, 9, 10, 33, 30, 0).toString(),
  },
  {
    senderAvatar: defaultProfilePic,
    senderId: '6AYHXtSfMR',
    message: 'hello',
    timestamp: Date(2022, 6, 9, 10, 45, 30, 0).toString(),
  },
  {
    senderAvatar: defaultProfilePic,
    senderId: 'fMTSAEEHmr',
    message: 'hello',
    timestamp: Date(2022, 6, 9, 10, 46, 30, 0).toString(),
  },
  {
    senderAvatar: defaultProfilePic,
    senderId: '6AYHXtSfMR',
    message: 'hello',
    timestamp: Date(2022, 6, 9, 10, 50, 30, 0).toString(),
  },
  {
    senderAvatar: defaultProfilePic,
    senderId: '6AYHXtSfMR',
    message: 'hello',
    timestamp: Date(2022, 6, 9, 10, 57, 30, 0).toString(),
  },
];

const Chat = ({ isMobile, isDarkMode, toggleDarkMode }) => {
  const loggedInUserId = '6AYHXtSfMR';

  // Mobile Version
  if (isMobile) {
    return (
      <div className="container__chats__mobile">
        {sampleChatData.map((message) =>
          message.senderId === loggedInUserId ? (
            <div
              style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'flex-end',
              }}
            >
              <div style={{ width: 'fit-content', backgroundColor: 'green' }}>
                {message.message}
              </div>
            </div>
          ) : (
            <div
              style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'flex-start',
              }}
            >
              <div style={{ width: 'fit-content', backgroundColor: 'blue' }}>
                {message.message}
              </div>
            </div>
          )
        )}
      </div>
    );
  }

  // Desktop Version

  return (
    <div className={styles.container__chats__desktop}>
      {sampleChatData.map((message) =>
        message.senderId === loggedInUserId ? (
          <div
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'flex-end',
            }}
          >
            <div style={{ width: 'fit-content', backgroundColor: 'green' }}>
              {message.message}
            </div>
          </div>
        ) : (
          <div
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'flex-start',
            }}
          >
            <div style={{ width: 'fit-content', backgroundColor: 'blue' }}>
              {message.message}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Chat;
