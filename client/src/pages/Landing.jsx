import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoMdVideocam } from 'react-icons/io';
import { MdPresentToAll } from 'react-icons/md';
import { Link } from 'react-router-dom';

import styles from '../styles/Landing.module.css';

const Landing = () => {
  return (
    <main className={styles.maincontainer}>
      <div className={styles.welcometext}>Welcome to</div>
      <div className={styles.logotext}>CHAPP</div>
      <img className={styles.image} src="src/assets/landing-img.svg"></img>
      <section className={styles.icons}>
        <FaPhoneAlt className={styles.mdicon} />
        <IoMdVideocam className={styles.mdicon} />
        <MdPresentToAll className={styles.mdicon} />
      </section>
      <section className={styles.cta}>
        <Link to="/login">Login</Link> | <Link to="/registration">Signup</Link>
      </section>
    </main>
  );
};

export default Landing;
