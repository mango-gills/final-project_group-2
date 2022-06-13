import React from 'react';
import defaultProfilePic from '../assets/images-avatars/placeholder_avatar.png';
import styles from '../styles/Chat.module.css';
import addPhotoIcon from '../assets/icons/add_photo_white.svg';

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

const Chat = ({ isMobile, isDarkMode, toggleDarkMode }) => {
  const loggedInUserId = '6AYHXtSfMR';
  const friendInfo = {
    name: 'Mango Gills',
    online: true,
    avatar: defaultProfilePic,
  };

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
      <div className={styles.wrapper__header}>
        <div className={styles.wrapper__friendavatar}>
          <img
            className={styles.friendavatar_image}
            src={friendInfo.avatar}
            alt=""
          />
        </div>
        <div className={styles.wrapper__friendinfo}>
          <h2 className={styles.friendInfo_name}>{friendInfo.name}</h2>
          <div className={styles.wrapper__friendinfo_status}>
            <span className={styles.friendinfo__status_indicator}></span>
            <span className={styles.friendinfo__status}>
              {friendInfo.online ? 'online' : 'offline'}
            </span>
          </div>
        </div>
      </div>
      <div className={styles.wrapper__messages}>
        {sampleChatData.map((message) =>
          message.senderId === loggedInUserId ? (
            <div className={`${styles.wrapper__message} ${styles.wrapper__message_user}`}>
              <div className={styles.message_user}>{message.message}</div>
              <div className={styles.message__avatar_wrapper}>
                <img className={styles.message__avatar_image} src={defaultProfilePic} alt="" />
              </div>
            </div>
          ) : (
            <div className={`${styles.wrapper__message} ${styles.wrapper__message_friend}`}>
              <div className={styles.message__avatar_wrapper}>
                <img className={styles.message__avatar_image} src={defaultProfilePic} alt="" />
              </div>
              <div className={styles.message_friend}>{message.message}</div>
            </div>
          )
        )}
      </div>

        <form className={styles.wrapper__form}>
          <textarea className={styles.form__textarea} placeholder="Start writing your message...."></textarea>
          <div className={styles.wrapper_form_buttons}>
            {/*<button className={styles.form__button_addphoto} type="button">
              <img className={styles.button_addphoto_image} src={addPhotoIcon} />
          </button>*/}
          <label className={styles.form__button_addphoto}>
          <input type="file" accept="image/*" className={styles.button_addphoto_input} />  
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
