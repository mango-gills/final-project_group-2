import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../styles/Password.module.css';

const PasswordRecovery = () => {
  return (
    <main className={styles.main__container}>
      <section className={styles.main__section}>
        <div className={styles.heading}>Recover Password</div>
        <form className={styles.form__password}>
          <input
            className={`${styles.form__input} ${styles.email}`}
            id="email"
            placeholder="email address"
            type="text"
          ></input>
          <button className={styles.form__button}>SUBMIT</button>
        </form>
        <Link className={styles.backlink} to="/login">
          Go back to Login page
        </Link>
      </section>
    </main>
  );
};

export default PasswordRecovery;
