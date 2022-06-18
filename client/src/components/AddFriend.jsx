import React, { useContext } from 'react';
import { SharedContext } from '../contexts/SharedContext';
import theme from '../styles/globals.module.css';
import styles from '../styles/AddFriend.module.css';

const theme_light = {
  "--color-chat-feed-header-text-color": "#303030",
  "--color-chat-feed-header-button-color": "#303030",
  "--color-chat-feed-bg-color": "#f9effc",
  "--color-chat-preview-conversation-name-color": "#303030",
  "--color-chat-preview-conversation-preview-color": "#707070",
  "--color-chat-bg-color": "#f6f6f6",
  "--color-chat-header-name-color": "#303030",
  "--color-chat-header-status-color": "#707070",
  "--color-shared-status-indicator-online-color": "#00ff66",
  "--color-shared-status-indicator-offline-color": "#707070",
  "--color-chat-message-friend-bg-color": "#f6e5fb",
  "--color-chat-message-friend-text-color": "#303030",
  "--color-chat-message-user-bg-color": "#c158e3",
  "--color-chat-message-user-text-color": "#f6f6f6",
  "--color-chat-text-area-bg-color": "#f3f3f3",
  "--color-chat-text-area-placeholder-color": "#969696",
  "--color-chat-button-add-image-bg-color": "#a307d5",
  "--color-chat-button-add-image-text-color": "#f6f6f6",
  "--color-chat-button-submit-bg-color": "#efac54",
  "--color-chat-button-submit-text-color": "#f6f6f6",
  "--color-settings-bg-color": "#f6f6f6",
  "--color-settings-user-name-color": "#303030",
  "--color-settings-user-status-color": "#303030",
  "--color-settings-settings-header-color": "#303030",
  "--color-settings-settings-options-color": "#707070",
  "--color-border-color": "rgba(112, 112, 112, .4)",
  "--color-settings-darkmode-text-color": "#707070",
  "--color-settings-darkmode-toggle-light-bg-color": "#efac54",
  "--color-settings-darkmode-toggle-dark-bg-color": "#a307d5",
  "--color-settings-log-out-bg-hover-color": "#d90000",
  "--color-shared-empty-state-color": "#303030",
  "--color-shared-empty-state-link-color": "#a307d5",
  "--color-pop-up-component-bg-color": "#f6f6f6",
  "--color-pop-up-component-header-color": "#595959",
  "--color-pop-up-component-input-border-color": "#a9a9a9",
  "--color-pop-up-component-input-placeholder-color": "#707070",
  "--color-pop-up-component-button-bg-color": "#a307d5",
  "--color-pop-up-component-button-text-color": "#f6f6f6",
  "--color-pop-up-component-go-back-text-color": "#707070",
}

const theme_dark = {
  "--color-chat-feed-header-text-color": "#f6f6f6",
  "--color-chat-feed-header-button-color": "#f6f6f6",
  "--color-chat-feed-bg-color": "#492b53",
  "--color-chat-preview-conversation-name-color": "#f6f6f6",
  "--color-chat-preview-conversation-preview-color": "#efdff4",
  "--color-chat-bg-color": "#442e4b",
  "--color-chat-header-name-color": "#f6f6f6",
  "--color-chat-header-status-color": "#dadada",
  "--color-shared-status-indicator-online-color": "#00ff66",
  "--color-shared-status-indicator-offline-color": "#707070",
  "--color-chat-message-friend-bg-color": "#4e2959",
  "--color-chat-message-friend-text-color": "#f6f6f6",
  "--color-chat-message-user-bg-color": "#8313a8",
  "--color-chat-message-user-text-color": "#f6f6f6",
  "--color-chat-text-area-bg-color": "#4e2959",
  "--color-chat-text-area-placeholder-color": "#f9effc",
  "--color-chat-button-add-image-bg-color": "#a307d5",
  "--color-chat-button-add-image-text-color": "#f6f6f6",
  "--color-chat-button-submit-bg-color": "#ea8e15",
  "--color-chat-button-submit-text-color": "#f6f6f6",
  "--color-settings-bg-color": "#46324d",
  "--color-settings-user-name-color": "#f6f6f6",
  "--color-settings-user-status-color": "#dadada",
  "--color-settings-settings-header-color": "#f6f6f6",
  "--color-settings-settings-options-color": "#dadada",
  "--color-border-color": "rgba(112, 112, 112, .4)",
  "--color-settings-darkmode-text-color": "#dadada",
  "--color-settings-darkmode-toggle-light-bg-color": "#efac54",
  "--color-settings-darkmode-toggle-dark-bg-color": "#a307d5",
  "--color-settings-log-out-bg-hover-color": "#d90000",
  "--color-shared-empty-state-color": "#f6f6f6",
  "--color-shared-empty-state-link-color": "#efac54",
  "--color-pop-up-component-bg-color": "#442e4b",
  "--color-pop-up-component-header-color": "#f6f6f6",
  "--color-pop-up-component-input-border-color": "#a9a9a9",
  "--color-pop-up-component-input-placeholder-color": "#707070",
  "--color-pop-up-component-button-bg-color": "#e8aa15",
  "--color-pop-up-component-button-text-color": "#f6f6f6",
  "--color-pop-up-component-go-back-text-color": "#dadada",
}

const AddFriend = () => {
  const {
    isMobile,
    isDarkMode,
    toggleChatFeedVisibility,
    showAddFriendComponent,
    toggleAddFriendVisibility,
  } = useContext(SharedContext);
  if (isMobile) {
    return (
      <div className={styles.mobile_container__addfriend}>
        <div className={styles.mobile_wrapper__addfriend_form}>
          <form className={styles.mobile_addfriend__form}>
            <h2 className={styles.mobile_addfriend__header}>Find a friend</h2>
            <input
              className={styles.mobile_addfriend__input}
              placeholder="<username>#0000"
            />
            <button type="submit" className={styles.mobile_addfriend__button}>
              Start Talking
            </button>
          </form>
          <span
            className={styles.mobile_addfriend__goback}
            onClick={() => {
              toggleAddFriendVisibility(!showAddFriendComponent);
              toggleChatFeedVisibility(true);
            }}
          >
            Go Back to your Message Feed
          </span>
        </div>
      </div>
    );
  }

  return (
      <div  id={isDarkMode ? theme.dark : theme.light} className={styles.desktop_container__addfriend}>
        <div className={styles.desktop_wrapper__addfriend_form}>
          <form className={styles.desktop_addfriend__form}>
            <h2 className={styles.desktop_addfriend__header}>Find a friend</h2>
            <input
              className={styles.desktop_addfriend__input}
              placeholder="<username>#0000"
            />
            <button type="submit" className={styles.desktop_addfriend__button}>
              Start Talking
            </button>
          </form>
          <span
            className={styles.desktop_addfriend__goback}
            onClick={() => {
              toggleAddFriendVisibility(!showAddFriendComponent);
            }}
          >
            Go Back to your Message Feed
          </span>
        </div>
      </div>
  );
};

export default AddFriend;
