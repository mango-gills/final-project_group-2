import React from 'react';
import { MdPresentToAll } from 'react-icons/md';

import styles from '../styles/Registration.module.css';

const Registration = () => {
  return (
    <main className={styles.maincontainer}>
      <div className={styles.title}>Create an account</div>
      <section>
        <form className={styles.registration}>
          {/* <MdPresentToAll className={styles.icon} /> */}
          <input
            className={`${styles.username} ${styles.icon}`}
            id="username"
            placeholder="username"
            type="text"
          ></input>
          <input
            className={styles.email}
            id="email"
            placeholder="email"
            type="text"
          ></input>
          <input
            className={styles.password}
            id="password"
            placeholder="password"
            type="password"
          ></input>
          <input
            className={styles.password}
            id="confirm password"
            placeholder="confirm password"
            type="password"
          ></input>
          <button className={styles.submit}>SIGNUP</button>
          <div className={styles.text}></div>
          <div className={styles.text}></div>
        </form>
      </section>
    </main>
  );
};

export default Registration;
