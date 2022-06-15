import React from 'react';
import HeaderMobileChatFeed from './HeaderMobileChatFeed';
import ChatFeed from './ChatFeed';
import HeaderMobileChat from './HeaderMobileChat';
import Chat from './Chat';
import Settings from './Settings';
import { useState } from 'react';
import styles from '../styles/MobileContainer.module.css';
import AddFriend from './AddFriend';

const MobileContainer = ({
  isMobile,
  isDarkMode,
  toggleDarkMode,
  showAddFriendComponent,
  toggleAddFriendVisibility,
  showUploadAvatarComponent,
  toggleUploadAvatarVisibility,
  showChangePasswordComponent,
  toggleChangePasswordVisibility,
}) => {
  const [showChatFeed, toggleChatFeedVisibility] = useState(true);
  const [showChat, toggleChatVisibility] = useState(false);
  const [showSettings, toggleSettingsVisibility] = useState(false);
  return (
    <div className={styles.mobile__main_container}>
      {showChatFeed ? (
        <div className={styles.mobile__main_container}>
          <HeaderMobileChatFeed
            showSettings={showSettings}
            toggleSettingsVisibility={toggleSettingsVisibility}
            showChatFeed={showChatFeed}
            toggleChatFeedVisibility={toggleChatFeedVisibility}
            showAddFriendComponent={showAddFriendComponent}
            toggleAddFriendVisibility={toggleAddFriendVisibility}
          />
          <ChatFeed
            isMobile={isMobile}
            showChat={showChat}
            toggleChatVisibility={toggleChatVisibility}
            showChatFeed={showChatFeed}
            toggleChatFeedVisibility={toggleChatFeedVisibility}
          />
        </div>
      ) : (
        ''
      )}
      {showChat ? (
        <div className={styles.mobile__main_container}>
          <HeaderMobileChat
            showChatFeed={showChatFeed}
            toggleChatFeedVisibility={toggleChatFeedVisibility}
            showChat={showChat}
            toggleChatVisibility={toggleChatVisibility}
          />
          <Chat isMobile={isMobile} />
        </div>
      ) : (
        ''
      )}
      {showSettings ? (
        <Settings
          isMobile={isMobile}
          showSettings={showSettings}
          toggleSettingsVisibility={toggleSettingsVisibility}
          showChatFeed={showChatFeed}
          toggleChatFeedVisibility={toggleChatFeedVisibility}
        />
      ) : (
        ''
      )}
      {showAddFriendComponent ? (
        <AddFriend
          isMobile={isMobile}
          showAddFriendComponent={showAddFriendComponent}
          toggleAddFriendVisibility={toggleAddFriendVisibility}
          showChatFeed={showChatFeed}
          toggleChatFeedVisibility={toggleChatFeedVisibility}
        />
      ) : (
        ''
      )}
    </div>
  );
};

export default MobileContainer;
