import React from 'react';

export default ChatPreview = ({ messageObject }) => {
  return (
    <div>
      <div>
        <img src={messageObject.senderAvatar} />
      </div>
      <div>
        <p>{messageObject.senderName}</p>
        <p>{messageObject.message}</p>
      </div>
      <div>{messageObject.timeSent}</div>
    </div>
  );
};
