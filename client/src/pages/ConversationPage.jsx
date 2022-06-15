import React, { useState, useEffect } from 'react';
import DesktopContainer from '../components/DesktopContainer';
import MobileContainer from '../components/MobileContainer';
import { db, auth } from '../firebase';
import {
  collection,
  query,
  where,
  onSnapshot,
  addDoc,
  Timestamp,
  orderBy,
  doc,
  getDoc,
  updateDoc,
} from 'firebase/firestore';

const ConversationPage = () => {
  const [chat, setChat] = useState();
  const [text, setText] = useState();
  const [users, setUsers] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);
  const [isDarkMode, toggleDarkMode] = useState(false);
  const [isMobile, setIsMobile] = useState(width <= 768);
  const [showAddFriendComponent, toggleAddFriendVisibility] = useState(false);
  const [showUploadAvatarComponent, toggleUploadAvatarVisibility] =
    useState(false);
  const [showChangePasswordComponent, toggleChangePasswordVisibility] =
    useState(false);
  const [msgs, setMsgs] = useState([]);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  const user1 = auth.currentUser.uid;

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  useEffect(() => {
    setIsMobile(width <= 768);
  }, [width]);
  useEffect(() => {
    const usersRef = collection(db, 'users');
    const q = query(
      usersRef,
      where('uid', 'not-in', [auth.currentUser.uid], [user1])
    );
    const unsub = onSnapshot(q, (querySnapshot) => {
      let users = [];
      querySnapshot.forEach((doc) => {
        users.push(doc.data());
      });
      setUsers(users);
    });
    return () => unsub();
  }, []);

  const selectUser = async (user) => {
    setChat(user);

    const user2 = user.uid;
    const id = user1 > user2 ? `${user1 + user2}` : `${user2 + user1}`;

    const msgsRef = collection(db, 'messages', id, 'chat');
    const q = query(msgsRef, orderBy('createdAt', 'asc'));

    onSnapshot(q, (querySnapshot) => {
      let msgs = [];
      querySnapshot.forEach((doc) => {
        msgs.push(doc.data());
      });
      setMsgs(msgs);
    });
    const docSnap = await getDoc(doc(db, 'lastMsg', id));
    // if last message exists and message is from selected user
    if (docSnap.data() && docSnap.data().from !== user1) {
      // update last message doc, set unread to false
      await updateDoc(doc(db, 'lastMsg', id), { unread: false });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user2 = chat.uid;
    const id = user1 > user2 ? `${user1 + user2}` : `${user2 + user1}`;
    await addDoc(collection(db, 'messages', id, 'chat'), {
      text,
      from: user1,
      to: user2,
      createdAt: Timestamp.fromDate(new Date()),
    });
    setText('');
  };

  return (
    <div>
      {isMobile ? (
        <MobileContainer
          isMobile={isMobile}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
          showAddFriendComponent={showAddFriendComponent}
          toggleAddFriendVisibility={toggleAddFriendVisibility}
          showUploadAvatarComponent={showUploadAvatarComponent}
          toggleUploadAvatarVisibility={toggleUploadAvatarVisibility}
          showChangePasswordComponent={showChangePasswordComponent}
          toggleChangePasswordVisibility={toggleChangePasswordVisibility}
        />
      ) : (
        <DesktopContainer
          msgs={msgs}
          setText={setText}
          text={text}
          handleSubmit={handleSubmit}
          selectUser={selectUser}
          chat={chat}
          users={users}
          isMobile={isMobile}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
          showAddFriendComponent={showAddFriendComponent}
          toggleAddFriendVisibility={toggleAddFriendVisibility}
          showUploadAvatarComponent={showUploadAvatarComponent}
          toggleUploadAvatarVisibility={toggleUploadAvatarVisibility}
          showChangePasswordComponent={showChangePasswordComponent}
          toggleChangePasswordVisibility={toggleChangePasswordVisibility}
        />
      )}
    </div>
  );
};

export default ConversationPage;
