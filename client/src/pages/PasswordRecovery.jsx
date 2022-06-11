import React from 'react';

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
        <div className={styles.backlink}>Go back to Login page</div>
      </section>
    </main>
  );
};

export default PasswordRecovery;
