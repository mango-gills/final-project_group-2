import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../styles/Password.module.css';

const PasswordVerification = () => {
  return (
    <main className={styles.main__container}>
      <section className={styles.main__section}>
        <div className={styles.heading}>Verification</div>
        <form className={styles.form__password}>
          <input
            className={styles.form__input}
            id="verification code"
            placeholder="Enter 6-digit verification code"
            type="text"
          ></input>
          <div className={styles.text__resend}>
            Didn't receive the code?
            <span className={styles.resend}> Resend</span>
          </div>
          <button className={styles.form__button}>SUBMIT</button>
        </form>
        <Link className={styles.backlink} to="/login">
          Go back to Login page
        </Link>
      </section>
    </main>
  );
};

export default PasswordVerification;
