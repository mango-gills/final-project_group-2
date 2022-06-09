import React from 'react';
import ChatFeed from './ChatFeed';
import Chat from './Chat';
import Settings from './Settings';

export default DesktopContainer = () => {
  return (
    <div>
      <ChatFeed />
      <Chat />
      <Settings />
    </div>
  );
};
