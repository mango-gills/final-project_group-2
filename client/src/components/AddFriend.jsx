import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "../styles/AddFriend.module.css";

import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const AddFriend = ({
  isMobile,
  isDarkMode,
  toggleDarkMode,
  showAddFriendComponent,
  toggleAddFriendVisibility,
  blurBackground,
  toggleBlurBackground,
}) => {
  if (isMobile) {
    return (
      <div>
        <div>mobile add comononet</div>
      </div>
    );
  }

  const [user] = useAuthState(auth);
  const [chatEmail, setChatEmail] = useState("");

  const addFriend = async () => {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (chatEmail.match(mailformat)) {
      successAddEmail();

      auth.getUserByEmail(chatEmail).then((userRecord) => {
        console.log(userRecord.toJSON());
      });

      setTimeout(async () => {
        await addDoc(collection(db, "friends"), {
          friend: [user.uid],
        });
      }, 1500);
    } else {
      errorAddEmail();
      setChatEmail("");
    }
  };

  //   toast notifications
  const successAddEmail = () =>
    toast.success("Email Added!", {
      autoClose: 1000,
      pauseOnHover: false,
      closeOnClick: true,
      pauseOnFocusLoss: false,
    });

  const errorAddEmail = () =>
    toast.warn("Invalid email address!", {
      autoClose: 1000,
      pauseOnHover: false,
      closeOnClick: true,
      pauseOnFocusLoss: false,
    });

  return (
    <div className={`${styles.container__addfriend} ${styles.backdrop_blur}`}>
      <div className={styles.wrapper__addfriend_form}>
        <form
          className={styles.addfriend__form}
          onSubmit={(e) => e.preventDefault()}
        >
          <h2 className={styles.addfriend__header}>Find a friend</h2>
          <input
            className={styles.addfriend__input}
            placeholder="<username>#0000"
            value={chatEmail}
            onChange={(e) => setChatEmail(e.target.value)}
          />
          <button
            type="submit"
            className={styles.addfriend__button}
            onClick={() => addFriend()}
          >
            Start Talking
          </button>
        </form>
        <span
          className={styles.addfriend__goback}
          onClick={() => {
            toggleAddFriendVisibility(!showAddFriendComponent);
          }}
        >
          Go Back to your Message Feed
        </span>
      </div>

      <div className={styles.container__addfriend_blur}></div>
      <ToastContainer />
    </div>
  );
};

export default AddFriend;
