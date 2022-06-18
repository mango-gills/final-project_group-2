import React, { useContext } from 'react';
import { SharedContext } from '../contexts/SharedContext';
import HeaderMobileChatFeed from './HeaderMobileChatFeed';
import ChatFeed from './ChatFeed';
import HeaderMobileChat from './HeaderMobileChat';
import Chat from './Chat';
import Settings from './Settings';
import styles from '../styles/MobileContainer.module.css';
import AddFriend from './AddFriend';

const MobileContainer = () => {
  const { showAddFriendComponent, showChatFeed, showChat, showSettings } =
    useContext(SharedContext);

  return (
    <div className={styles.mobile__main_container}>
      {showChatFeed ? (
        <div className={styles.mobile__main_container}>
          <HeaderMobileChatFeed />
          <ChatFeed />
        </div>
      ) : (
        ''
      )}
      {showChat ? (
        <div className={styles.mobile__main_container}>
          <HeaderMobileChat />
          <Chat />
        </div>
      ) : (
        ''
      )}
      {showSettings ? <Settings /> : ''}
      {showAddFriendComponent ? <AddFriend /> : ''}
    </div>
  );
};

export default MobileContainer;
