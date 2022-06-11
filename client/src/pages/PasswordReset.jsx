import React from 'react';

import styles from '../styles/Password.module.css';

const PasswordReset = () => {
  return (
    <main className={styles.main__container}>
      <section className={styles.main__section}>
        <div className={styles.heading}>Reset Password</div>
        <form className={styles.form__password}>
          <input
            className={`${styles.form__input} ${styles.password}`}
            id="password"
            placeholder="password"
            type="password"
          ></input>
          <input
            className={`${styles.form__input} ${styles.password}`}
            id="confirm-password"
            placeholder="confirm password"
            type="password"
          ></input>
          <button className={styles.form__button}>SUBMIT</button>
        </form>
        <div className={styles.backlink}>Go back to Login page</div>
      </section>
    </main>
  );
};

export default PasswordReset;
