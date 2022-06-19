import React, { useState, useEffect, useContext } from 'react';
import { SharedContext } from '../contexts/SharedContext';
import ChatFeed from './ChatFeed';
import Chat from './Chat';
import Settings from './Settings';
import AddFriend from './AddFriend';
import ChangePassword from './ChangePassword';
import UploadAvatar from './UploadAvatar';
import LogOutModal from './LogoutModal';
import styles from '../styles/DesktopContainer.module.css';
import { storage, db, auth } from '../firebase';
import {
  ref,
  getDownloadURL,
  uploadBytes,
  deleteObject,
} from 'firebase/storage';
import { getDoc, doc, updateDoc } from 'firebase/firestore';

const DesktopContainer = ({
  user1,
  msgs,
  setText,
  text,
  handleSubmit,
  selectUser,
  users,
  chat,
}) => {
  const {
    showAddFriendComponent,
    showUploadAvatarComponent,
    showChangePasswordComponent,
    showLogOutModal
  } = useContext(SharedContext);
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

  return (
    <div className={styles.container_desktop}>
      <ChatFeed selectUser={selectUser} users={users} />
      <Chat
        user={user}
        user1={user1}
        msgs={msgs}
        setText={setText}
        text={text}
        handleSubmit={handleSubmit}
        chat={chat}
        selectUser={selectUser}
      />
      <Settings user={user} />
      {showAddFriendComponent ? <AddFriend /> : ''}
      {showUploadAvatarComponent ? (
        <UploadAvatar loading={loading} img={img} setImg={setImg} user={user} />
      ) : (
        ''
      )}
      {showChangePasswordComponent ? <ChangePassword /> : ''}
      {showLogOutModal ? <LogOutModal /> : ''}
    </div>
  );
};

export default DesktopContainer;
