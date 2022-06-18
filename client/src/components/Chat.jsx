import React, { useEffect, useState } from 'react';
import defaultProfilePic from '../assets/images-avatars/placeholder_avatar.png';
import styles from '../styles/Chat.module.css';
import addPhotoIcon from '../assets/icons/add_photo_white.svg';
import ChatMessage from './ChatMessage';

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
  {
    senderAvatar: defaultProfilePic,
    senderId: 'fMTSAEEHmr',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    timestamp: Date(2022, 6, 9, 10, 46, 30, 0).toString(),
  },
];

const Chat = ({
  previewUrl,
  attachImg,
  setAttachImg,
  user,
  user1,
  msgs,
  isMobile,
  isDarkMode,
  toggleDarkMode,
  chat,
  text,
  setText,
  handleSubmit,
}) => {
  const loggedInUserId = '6AYHXtSfMR';
  const friendInfo = {
    name: 'Mango Gills',
    online: true,
    avatar: defaultProfilePic,
  };

  // trying to implement an indicator for attached photos

  const [photoButtonClicked, togglePhotoButtonClicked] = useState(false);
  const [showPhotoAddedIndicator, toggleShowPhotoAddedIndicator] =
    useState(false);

  useEffect(() => {
    const imageInput = document.querySelector('#image_input');

    if (imageInput[0]?.files.length > 0) {
      console.log('files attached', imageInput.files.length);
      toggleShowPhotoAddedIndicator(true);
      return;
    }

    toggleShowPhotoAddedIndicator(false);
    console.log('files attached', imageInput.files.length);
  }, [photoButtonClicked]);

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
    <div className={styles.container__chat_desktop}>
      {chat ? (
        <>
          <div className={styles.wrapper__header}>
            <div className={styles.wrapper__friendavatar}>
              <img
                className={styles.friendavatar_image}
                src={chat.avatar || defaultProfilePic}
                alt=""
              />
            </div>
            <div className={styles.wrapper__friendinfo}>
              <h2 className={styles.friendInfo_name}>{chat.name}</h2>
              <div className={styles.wrapper__friendinfo_status}>
                <span className={styles.friendinfo__status_indicator}></span>
                <span className={styles.friendinfo__status}>
                  {chat.isOnline ? 'online' : 'offline'}
                </span>
              </div>
            </div>
          </div>
          <div className={styles.wrapper__messages}>
            {msgs.length
              ? msgs.map((msg, i) => (
                  <ChatMessage
                    key={i}
                    msg={msg}
                    user1={user1}
                    chat={chat}
                    user={user}
                    stamp={msg.createdAt}
                  />
                ))
              : null}
          </div>
        </>
      ) : (
        <h3>Select a User to Start a Conversation</h3>
      )}

      <form className={styles.wrapper__form} onSubmit={handleSubmit}>
        <div>
          {previewUrl ? (
            <div className={styles.wrapper__preview_image}>
              <img
                className={styles.preview_image}
                src={previewUrl}
                alt="previewImage"
              />
            </div>
          ) : null}
        </div>
        <textarea
          className={styles.form__textarea}
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Start writing your message...."
        ></textarea>

        <div className={styles.wrapper_form_buttons}>
          <button className={styles.form__button_addphoto} type="button">
            <img className={styles.button_addphoto_image} src={addPhotoIcon} />
          </button>
          <label className={styles.form__button_addphoto}>
            {showPhotoAddedIndicator ? (
              <span className={styles.form__photoadded_indicator}></span>
            ) : (
              ''
            )}
            <input
              id="image_input"
              type="file"
              accept="image/*"
              className={styles.button_addphoto_input}
              onChange={(e) => setAttachImg(e.target.files[0])}
            />
          </label>
          <button className={styles.form__button_send} type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chat;
