import React from 'react';
import ChatPreview from './ChatPreview';
import defaultProfilePic from '../assets/images-avatars/placeholder_avatar.png';

/*

6AYHXtSfMR
fMTSAEEHmr
Tx8HAGnu59
nMvYEVgyjw
cxnM4kRpCY

*/

const sampleData = [
  {
    userId: '6AYHXtSfMR',
    userName: 'Jim Kirk',
    userAvatar: defaultProfilePic,
    recipientId: 'Bea',
    message: 'Lorem ipsim dolorem',
    timeSent: Date(2022, 6, 9, 10, 33, 30, 0).toString(),
    viewed: true,
  },
  {
    senderId: '6AYHXtSfMR',
    senderName: 'Camille',
    senderAvatar: defaultProfilePic,
    recipientId: 'Bea',
    message:
      'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
    timeSent: Date(2022, 6, 9, 10, 45, 30, 0).toString(),
    viewed: true,
  },
  {
    senderId: 'Camille',
    senderName: 'Camille',
    senderAvatar: defaultProfilePic,
    recipientId: 'Denise',
    message:
      'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.',
    timeSent: Date(2022, 6, 9, 10, 50, 30, 0).toString(),
    viewed: true,
  },
  {
    senderId: 'Camille',
    senderName: 'Camille',
    senderAvatar: defaultProfilePic,
    recipientId: 'Moe',
    message:
      'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
    timeSent: Date(2022, 6, 9, 11, 17, 30, 0).toString(),
    viewed: true,
  },
  {
    senderId: 'Camille',
    senderAvatar: defaultProfilePic,
    recipientId: 'Inah',
    message:
      'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
    timeSent: Date(2022, 6, 9, 11, 51, 30, 0).toString(),
    viewed: true,
  },
];

export default ChatFeed = () => {
  return (
    <div>
      <h2>Messages</h2>
      <div>
        {sampleData.map((messageObject) => (
          <ChatPreview messageObject={messageObject} />
        ))}
      </div>
    </div>
  );
};

