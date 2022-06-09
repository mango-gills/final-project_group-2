import React from 'react';
import HeaderMobileChatFeed from './HeaderMobileChatFeed';
import ChatFeed from './ChatFeed';
import HeaderMobileChat from './HeaderMobileChat';
import Chat from './Chat';
import Settings from './Settings';

export default MobileContainer = () => {
  return (
    <div>
      <div>
        <HeaderMobileChatFeed />
        <ChatFeed />
      </div>
      <div>
      <HeaderMobileChat />
      <Chat />
      </div>
      <Settings />
    </div>
  );
};
