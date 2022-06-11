import React from 'react';
import { useState, useEffect } from 'react';
import { MdPresentToAll } from 'react-icons/md';
import { database } from '../firebaseConfig';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';

import styles from '../styles/Registration.module.css';

const Registration = () => {
  //state for new user
  const [newUser, setNewUser] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  console.log(newUser);

  //establish connection to the collection
  const usersCollectionRef = collection(database, 'users');

  //AddUser Info Holder
  const UserHandler = (e) => {
    const newUserHandler = { ...newUser };
    newUserHandler[e.target.id] = e.target.value;
    setNewUser(newUserHandler);
    console.log(newUserHandler);
  };

  //Adding a user to the collection upon submit
  const submitNewUser = async () => {
    await addDoc(usersCollectionRef, {
      username: newUser.username,
      email: newUser.email,
      password: newUser.password,
      confirmPassword: newUser.confirmPassword,
    });
    // e.preventDefault();
  };

  //Display all user information
  // useEffect(() => {
  //   const getUsers = async () => {
  //     //returns all the documents from a specific collection
  //     const data = await getDocs(usersCollectionRef);
  //     setUsers(
  //       data.docs.map((doc) => {
  //         ({ ...doc.data(), id: doc.id });
  //       })
  //     );
  //   };
  //   getUsers();
  // }, []);

  return (
    <main className={styles.maincontainer}>
      <div className={styles.title}>Create an account</div>
      <section>
        <form
          className={styles.registration}
          onSubmit={(e) => {
            submitNewUser(e);
          }}
        >
          {/* <MdPresentToAll className={styles.icon} /> */}
          <input
            className={`${styles.username} ${styles.icon}`}
            id="username"
            placeholder="username"
            type="text"
            onChange={(e) => {
              UserHandler(e);
            }}
            required
          ></input>
          <input
            className={styles.email}
            id="email"
            placeholder="email"
            type="email"
            onChange={(e) => {
              UserHandler(e);
            }}
            required
          ></input>
          <input
            className={styles.password}
            id="password"
            placeholder="password"
            type="password"
            onChange={(e) => {
              UserHandler(e);
            }}
            required
          ></input>
          <input
            className={styles.password}
            id="confirmPassword"
            placeholder="confirm password"
            type="password"
            onChange={(e) => {
              UserHandler(e);
            }}
            required
          ></input>
          <button className={styles.submit} type="submit">
            SIGNUP
          </button>
          <div className={styles.text}></div>
          <div className={styles.text}></div>
        </form>
      </section>
      <div className={styles.smtext}>
        By continuing, you agree to accept our Privacy Policy and Terms of
        service.
      </div>
      <div className={styles.mdtext}>
        Already have an account?{' '}
        <Link to={'/login'}>
          <span>Login</span>
        </Link>
      </div>
    </main>
  );
};

export default Registration;
