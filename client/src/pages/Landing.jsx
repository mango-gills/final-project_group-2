import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoMdVideocam } from 'react-icons/io';
import { MdPresentToAll } from 'react-icons/md';

import styles from '../styles/Landing.module.css';

const Landing = () => {
  return (
    <main className={styles.main__container}>
      <div className={styles.text__welcome}>Welcome to</div>
      <div className={styles.text__logo}>CHAPP</div>
      <img className={styles.image} src="src/assets/landing-img.svg"></img>
      <section className={styles.icons__section}>
        <div className={styles.icon}>
          <FaPhoneAlt />
        </div>
        <div className={styles.icon}>
          <IoMdVideocam />
        </div>
        <div className={styles.icon}>
          <MdPresentToAll />
        </div>
      </section>
      <section className={styles.cta}>Login | Signup</section>
    </main>
  );
};

export default Landing;
