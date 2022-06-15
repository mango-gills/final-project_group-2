import React from 'react';

const ChatMessage = ({ msg }) => {
  return (
    <div>
      {/* <div className={styles.wrapper__messages}>
        {sampleChatData.map((message) =>
          message.senderId === loggedInUserId ? (
            <div
              className={`${styles.wrapper__message} ${styles.wrapper__message_user}`}
            >
              <div className={styles.message_user}>{message.message}</div>
              <div className={styles.message__avatar_wrapper}>
                <img
                  className={styles.message__avatar_image}
                  src={defaultProfilePic}
                  alt=""
                />
              </div>
            </div>
          ) : (
            <div
              className={`${styles.wrapper__message} ${styles.wrapper__message_friend}`}
            >
              <div className={styles.message__avatar_wrapper}>
                <img
                  className={styles.message__avatar_image}
                  src={defaultProfilePic}
                  alt=""
                />
              </div>
              <div className={styles.message_friend}>{message.message}</div>
            </div>
          )
        )}
      </div> */}
      <p>
        {msg.text}
        <br />
      </p>
    </div>
  );
};

export default ChatMessage;
