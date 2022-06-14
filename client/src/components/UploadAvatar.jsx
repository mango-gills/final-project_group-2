import React, { useState, useEffect } from 'react';
import styles from '../styles/UploadAvatar.module.css';

const UploadAvatar = ({
  setImg,
  loading,
  isMobile,
  isDarkMode,
  toggleDarkMode,
  showUploadAvatarComponent,
  toggleUploadAvatarVisibility,
}) => {
  // MOBILE VERSION

  if (isMobile) {
    return (
      <div>
        <div>Upload Avatar</div>
      </div>
    );
  }

  // const [img, setImg] = useState('');
  // const [user, setUser] = useState();
  // useEffect(() => {
  //   getDoc(doc(db, 'users', auth.currentUser.uid)).then((docSnap) => {
  //     if (docSnap.exists) {
  //       setUser(docSnap.data());
  //     }
  //   });

  //   if (img) {
  //     const uploadImg = async () => {
  //       const imgRef = ref(
  //         storage,
  //         `avatar/${new Date().getTime()} - ${img.name}`
  //       );
  //       try {
  //         if (user.avatarPath) {
  //           await deleteObject(ref(storage, user.avatarPath));
  //         }
  //         const snap = await uploadBytes(imgRef, img);
  //         const url = await getDownloadURL(ref(storage, snap.ref.fullPath));

  //         await updateDoc(doc(db, 'users', auth.currentUser.uid), {
  //           avatar: url,
  //           avatarPath: snap.ref.fullPath,
  //         });

  //         setImg('');
  //       } catch (err) {
  //         console.log(err.message);
  //       }
  //     };
  //     uploadImg();
  //   }
  // }, [img]);
  // console.log(user);

  // DESKTOP VERSION
  return (
    <div
      className={`${styles.container__uploadavatar} ${styles.backdrop_blur}`}
    >
      <div className={styles.wrapper__uploadavatar_form}>
        <form className={styles.uploadavatar__form}>
          <h2 className={styles.uploadavatar__header}>Upload Avatar</h2>
          {/* <input
            className={styles.uploadavatar__input}
            placeholder="<username>#0000"
          />
          <button type="submit" className={styles.uploadavatar__button}>
            Upload
  </button> */}

          <input
            type="file"
            accept="image/*"
            className={styles.uploadavatar__input}
            id="photo"
            onChange={(e) => setImg(e.target.files[0])}
          />
          <button
            type="submit"
            className={styles.uploadavatar__button}
            disabled={loading}
          >
            Upload
          </button>
        </form>
        <span
          className={styles.uploadavatar__goback}
          onClick={() => {
            toggleUploadAvatarVisibility(!showUploadAvatarComponent);
          }}
        >
          Go Back to your Message Feed
        </span>
      </div>
    </div>
  );
};

export default UploadAvatar;
