import React, { useState, useEffect, useContext } from 'react';
import { SharedContext } from '../contexts/SharedContext';
import DesktopContainer from '../components/DesktopContainer';
import MobileContainer from '../components/MobileContainer';
import { db, auth, storage } from '../firebase';
import {
  ref,
  getDownloadURL,
  uploadBytes,
  deleteObject,
} from 'firebase/storage';
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
  setDoc,
} from 'firebase/firestore';

const theme_light = {
  '--color-chat-feed-header-text-color': '#303030',
  '--color-chat-feed-header-button-color': '#303030',
  '--color-chat-feed-bg-color': '#f9effc',
  '--color-chat-preview-conversation-name-color': '#303030',
  '--color-chat-preview-conversation-preview-color': '#707070',
  '--color-chat-bg-color': '#f6f6f6',
  '--color-chat-header-name-color': '#303030',
  '--color-chat-header-status-color': '#707070',
  '--color-shared-status-indicator-online-color': '#00ff66',
  '--color-shared-status-indicator-offline-color': '#707070',
  '--color-chat-message-friend-bg-color': '#f6e5fb',
  '--color-chat-message-friend-text-color': '#303030',
  '--color-chat-message-user-bg-color': '#c158e3',
  '--color-chat-message-user-text-color': '#f6f6f6',
  '--color-chat-text-area-bg-color': '#f3f3f3',
  '--color-chat-text-area-placeholder-color': '#969696',
  '--color-chat-button-add-image-bg-color': '#a307d5',
  '--color-chat-button-add-image-text-color': '#f6f6f6',
  '--color-chat-button-submit-bg-color': '#efac54',
  '--color-chat-button-submit-text-color': '#f6f6f6',
  '--color-settings-bg-color': '#f6f6f6',
  '--color-settings-user-name-color': '#303030',
  '--color-settings-user-status-color': '#303030',
  '--color-settings-settings-header-color': '#303030',
  '--color-settings-settings-options-color': '#707070',
  '--color-border-color': 'rgba(112, 112, 112, .4)',
  '--color-settings-darkmode-text-color': '#707070',
  '--color-settings-darkmode-toggle-light-bg-color': '#efac54',
  '--color-settings-darkmode-toggle-dark-bg-color': '#a307d5',
  '--color-settings-log-out-bg-hover-color': '#d90000',
  '--color-shared-empty-state-color': '#303030',
  '--color-shared-empty-state-link-color': '#a307d5',
  '--color-pop-up-component-bg-color': '#f6f6f6',
  '--color-pop-up-component-header-color': '#595959',
  '--color-pop-up-component-input-border-color': '#a9a9a9',
  '--color-pop-up-component-input-placeholder-color': '#707070',
  '--color-pop-up-component-button-bg-color': '#a307d5',
  '--color-pop-up-component-button-text-color': '#f6f6f6',
  '--color-pop-up-component-go-back-text-color': '#707070',
};

const theme_dark = {
  '--color-chat-feed-header-text-color': '#f6f6f6',
  '--color-chat-feed-header-button-color': '#f6f6f6',
  '--color-chat-feed-bg-color': '#492b53',
  '--color-chat-preview-conversation-name-color': '#f6f6f6',
  '--color-chat-preview-conversation-preview-color': '#efdff4',
  '--color-chat-bg-color': '#442e4b',
  '--color-chat-header-name-color': '#f6f6f6',
  '--color-chat-header-status-color': '#dadada',
  '--color-shared-status-indicator-online-color': '#00ff66',
  '--color-shared-status-indicator-offline-color': '#707070',
  '--color-chat-message-friend-bg-color': '#4e2959',
  '--color-chat-message-friend-text-color': '#f6f6f6',
  '--color-chat-message-user-bg-color': '#8313a8',
  '--color-chat-message-user-text-color': '#f6f6f6',
  '--color-chat-text-area-bg-color': '#4e2959',
  '--color-chat-text-area-placeholder-color': '#f9effc',
  '--color-chat-button-add-image-bg-color': '#a307d5',
  '--color-chat-button-add-image-text-color': '#f6f6f6',
  '--color-chat-button-submit-bg-color': '#ea8e15',
  '--color-chat-button-submit-text-color': '#f6f6f6',
  '--color-settings-bg-color': '#46324d',
  '--color-settings-user-name-color': '#f6f6f6',
  '--color-settings-user-status-color': '#dadada',
  '--color-settings-settings-header-color': '#f6f6f6',
  '--color-settings-settings-options-color': '#dadada',
  '--color-border-color': 'rgba(112, 112, 112, .4)',
  '--color-settings-darkmode-text-color': '#dadada',
  '--color-settings-darkmode-toggle-light-bg-color': '#efac54',
  '--color-settings-darkmode-toggle-dark-bg-color': '#a307d5',
  '--color-settings-log-out-bg-hover-color': '#d90000',
  '--color-shared-empty-state-color': '#f6f6f6',
  '--color-shared-empty-state-link-color': '#efac54',
  '--color-pop-up-component-bg-color': '#442e4b',
  '--color-pop-up-component-header-color': '#f6f6f6',
  '--color-pop-up-component-input-border-color': '#a9a9a9',
  '--color-pop-up-component-input-placeholder-color': '#707070',
  '--color-pop-up-component-button-bg-color': '#e8aa15',
  '--color-pop-up-component-button-text-color': '#f6f6f6',
  '--color-pop-up-component-go-back-text-color': '#dadada',
};

const ConversationPage = () => {
  const { width, setWidth, isMobile, setIsMobile } = useContext(SharedContext);
  const [attachImg, setAttachImg] = useState('');
  const [previewUrl, setPreviewUrl] = useState('');
  const [chat, setChat] = useState();
  const [text, setText] = useState();
  const [users, setUsers] = useState([]);
  const [msgs, setMsgs] = useState([]);

  const [img, setImg] = useState('');
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(async () => {
    getDoc(doc(db, 'users', auth.currentUser.uid)).then((docSnap) => {
      if (docSnap.exists) {
        setUser(docSnap.data());
      }
    });

    if (img) {
      const uploadImg = async () => {
        const imgRef = ref(
          storage,
          `avatar/${new Date().getTime()} - ${img.name}`
        );
        try {
          if (user.avatarPath) {
            await deleteObject(ref(storage, user.avatarPath));
          }
          const snap = await uploadBytes(imgRef, img);
          const url = await getDownloadURL(ref(storage, snap.ref.fullPath));

          await updateDoc(doc(db, 'users', auth.currentUser.uid), {
            avatar: url,
            avatarPath: snap.ref.fullPath,
          });

          setImg('');
        } catch (err) {
          console.log(err.message);
        }
      };
      try {
        await uploadImg();
      } catch (err) {
        err.message;
      }

      setLoading(false);
    }
  }, [img]);

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
    // const usersRef = collection(db, 'users');
    const usersRef = collection(db, 'friends/friend', user1);
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

  useEffect(() => {
    if (!attachImg) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(attachImg);
  }, [attachImg]);

  const selectUser = async (user) => {
    setChat(user);
    setPreviewUrl('');
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
    let url;
    if (text === '' || text.trim() === '') {
      return;
    }
    try {
      if (attachImg) {
        const imgRef = ref(
          storage,
          `images/${new Date().getTime()} - ${attachImg.name}`
        );
        const snap = await uploadBytes(imgRef, attachImg);
        const dlUrl = await getDownloadURL(ref(storage, snap.ref.fullPath));
        url = dlUrl;
      }
      await addDoc(collection(db, 'messages', id, 'chat'), {
        text,
        from: user1,
        to: user2,
        createdAt: Timestamp.fromDate(new Date()),
        media: url || '',
      });
    } catch (error) {
      console.log(error.message);
    }
    await setDoc(doc(db, 'lastMsg', id), {
      text,
      from: user1,
      to: user2,
      createdAt: Timestamp.fromDate(new Date()),
      media: url || '',
      unread: true,
    });
    setText('');
    setAttachImg('');
    setPreviewUrl('');
  };

  return (
    <div>
      {isMobile ? (
        <MobileContainer
          img={img}
          setImg={setImg}
          loading={loading}
          user={user}
          previewUrl={previewUrl}
          attachImg={attachImg}
          setAttachImg={setAttachImg}
          user1={user1}
          msgs={msgs}
          setText={setText}
          text={text}
          handleSubmit={handleSubmit}
          selectUser={selectUser}
          chat={chat}
          users={users}
        />
      ) : (
        <DesktopContainer
          img={img}
          setImg={setImg}
          loading={loading}
          user={user}
          previewUrl={previewUrl}
          attachImg={attachImg}
          setAttachImg={setAttachImg}
          user1={user1}
          msgs={msgs}
          setText={setText}
          text={text}
          handleSubmit={handleSubmit}
          selectUser={selectUser}
          chat={chat}
          users={users}
        />
      )}
    </div>
  );
};

export default ConversationPage;
