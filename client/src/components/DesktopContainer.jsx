import React, { useState, useEffect } from 'react';
import ChatFeed from './ChatFeed';
import Chat from './Chat';
import Settings from './Settings';
import AddFriend from './AddFriend';
import ChangePassword from './ChangePassword';
import UploadAvatar from './UploadAvatar';
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
  console.log('Change Password Component', showChangePasswordComponent);
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
      await uploadImg();
      setLoading(false);
    }
  }, [img]);
  return (
    <div className={styles.container_desktop}>
      <ChatFeed
        isMobile={isMobile}
        isDarkMode={isDarkMode}
        showAddFriendComponent={showAddFriendComponent}
        toggleAddFriendVisibility={toggleAddFriendVisibility}
      />
      <Chat isMobile={isMobile} isDarkMode={isDarkMode} />
      <Settings
        user={user}
        isMobile={isMobile}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        showChangePasswordComponent={showChangePasswordComponent}
        toggleChangePasswordVisibility={toggleChangePasswordVisibility}
        showUploadAvatarComponent={showUploadAvatarComponent}
        toggleUploadAvatarVisibility={toggleUploadAvatarVisibility}
      />
      {showAddFriendComponent ? (
        <AddFriend
          isMobile={isMobile}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
          showAddFriendComponent={showAddFriendComponent}
          toggleAddFriendVisibility={toggleAddFriendVisibility}
        />
      ) : (
        ''
      )}
      {showUploadAvatarComponent ? (
        <UploadAvatar
          loading={loading}
          img={img}
          setImg={setImg}
          user={user}
          isMobile={isMobile}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
          showUploadAvatarComponent={showUploadAvatarComponent}
          toggleUploadAvatarVisibility={toggleUploadAvatarVisibility}
        />
      ) : (
        ''
      )}
      {showChangePasswordComponent ? (
        <ChangePassword
          isMobile={isMobile}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
          showChangePasswordComponent={showChangePasswordComponent}
          toggleChangePasswordVisibility={toggleChangePasswordVisibility}
        />
      ) : (
        ''
      )}
    </div>
  );
};

export default DesktopContainer;
