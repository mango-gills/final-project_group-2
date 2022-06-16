import React, { useEffect, useState } from 'react';
import defaultProfilePic from '../assets/images-avatars/placeholder_avatar.png';
import styles from '../styles/Chat.module.css';
import addPhotoIcon from '../assets/icons/add_photo_white.svg';
import ChatMessage from './ChatMessage';
import EmptyStateImage from '../assets/other-images/empty-state.png';

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
  showAddFriendComponent,
  toggleAddFriendVisibility,
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

    if (imageInput === null) {
      return;
    }

    if (imageInput[0]?.files.length > 0) {
      console.log('files attached', imageInput?.files.length);
      toggleShowPhotoAddedIndicator(true);
      return;
    }

    toggleShowPhotoAddedIndicator(false);
    console.log('files attached', imageInput?.files.length);
  }, [photoButtonClicked]);

  // Mobile Version
  if (isMobile) {
    return (
      <div className={styles.mobile_container__chat}>
        <div className={styles.mobile_wrapper__messages}>
          {sampleChatData.map((message) =>
            message.senderId === loggedInUserId ? (
              <div
                className={`${styles.mobile_wrapper__message} ${styles.mobile_wrapper__message_user}`}
              >
                <div className={styles.mobile_message_user}>
                  {message.message}
                </div>
                <div className={styles.mobile_message__avatar_wrapper}>
                  <img
                    className={styles.mobile_message__avatar_image}
                    src={defaultProfilePic}
                    alt=""
                  />
                </div>
              </div>
            ) : (
              <div
                className={`${styles.mobile_wrapper__message} ${styles.mobile_wrapper__message_friend}`}
              >
                <div className={styles.mobile_message__avatar_wrapper}>
                  <img
                    className={styles.mobile_message__avatar_image}
                    src={defaultProfilePic}
                    alt=""
                  />
                </div>
                <div className={styles.mobile_message_friend}>
                  {message.message}
                </div>
              </div>
            )
          )}
        </div>
        <form
          className={styles.mobile_wrapper__form}
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              // insert code for accepting message data
            }
          }}
        >
          <label className={styles.mobile_form__button_addphoto}>
            <input
              id="image_input"
              type="file"
              accept="image/*"
              className={styles.mobile_button_addphoto_input}
              onChange={() => {
                togglePhotoButtonClicked(!photoButtonClicked);
              }}
            />
          </label>
          <textarea
            className={styles.mobile_form__textarea}
            placeholder="Start writing your message...."
          ></textarea>
          {/*<button className={styles.mobile_form__button_send} type="submit">
            </button>*/}
        </form>
      </div>
    );
  }

  // Desktop Version

  return (
    <div className={styles.desktop_container__chat}>
      {chat ? (
        <div className={styles.desktop_wrapper__header}>
          <div className={styles.desktop_wrapper__friendavatar}>
            <img
              className={styles.desktop_friendavatar_image}
              src={chat.avatar || defaultProfilePic}
              alt=""
            />
          </div>
          <div className={styles.desktop_wrapper__friendinfo}>
            <h2 className={styles.desktop_friendInfo_name}>{chat.name}</h2>
            <div className={styles.desktop_wrapper__friendinfo_status}>
              <span
                className={styles.desktop_friendinfo__status_indicator}
              ></span>
              <span className={styles.desktop_friendinfo__status}>
                {friendInfo.online ? 'online' : 'offline'}
              </span>
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
                  />
                ))
              : null}
          </div>
        </div>
      ) : (
        <div className={styles.desktop_container__empty_state}>
          <img
            className={styles.desktop_container__empty_state_image}
            src={EmptyStateImage}
            alt=""
          />
          <h3 className={styles.desktop_container__empty_state_text}>
            Select a friend from the left panel to start conversing!
          </h3>
          <h3 className={styles.desktop_container__empty_state_text}>
            or{' '}
            <span
              className={styles.desktop_container__empty_state_text_addfriend}
              onClick={() => {
                toggleAddFriendVisibility(!showAddFriendComponent);
              }}
            >
              Add a friend?
            </span>
          </h3>
        </div>
      )}

      <form className={styles.desktop_wrapper__form} onSubmit={handleSubmit}>
        <textarea
          className={styles.desktop_form__textarea}
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Start writing your message...."
        ></textarea>
        <div className={styles.desktop_wrapper_form_buttons}>
          {/*<button className={styles.desktop_form__button_addphoto} type="button">
              <img className={styles.desktop_button_addphoto_image} src={addPhotoIcon} />
          </button>*/}
          <label className={styles.desktop_form__button_addphoto}>
            {showPhotoAddedIndicator ? (
              <span
                className={styles.desktop_form__photoadded_indicator}
              ></span>
            ) : (
              ''
            )}
            <input
              id="image_input"
              type="file"
              accept="image/*"
              className={styles.desktop_button_addphoto_input}
              onChange={() => {
                togglePhotoButtonClicked(!photoButtonClicked);
              }}
            />
          </label>
          <button className={styles.desktop_form__button_send} type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chat;
