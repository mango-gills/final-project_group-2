import React from 'react';

import styles from '../styles/Registration.module.css';

const Registration = () => {
  return (
    <main className={styles.main__container}>
      <section className={styles.main__section}>
        <div className={styles.heading__container}>
          <div className={styles.heading}>Create an account</div>
        </div>
        <form className={styles.form__registration}>
          <input
            className={`${styles.form__input} ${styles.username}`}
            id="username"
            placeholder="username"
            type="text"
          ></input>
          <input
            className={`${styles.form__input} ${styles.email}`}
            id="email"
            placeholder="email address"
            type="text"
          ></input>
          <input
            className={`${styles.form__input} ${styles.password}`}
            id="password"
            placeholder="password"
            type="password"
          ></input>
          <input
            className={`${styles.form__input} ${styles.password}`}
            id="confirm password"
            placeholder="confirm password"
            type="password"
          ></input>
          <button className={styles.form__button}>SIGNUP</button>
        </form>
        <div className={styles.terms__text}>
          By continuing, you agree to accept our Privacy Policy and Terms of
          service.
        </div>
        <div className={styles.login__text}>
          Already have an account?
          <span className={styles.backlink}> Login</span>
        </div>
      </section>
    </main>
  );
};

export default Registration;
