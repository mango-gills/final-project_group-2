import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Login.module.css';

const LogIn = () => {
  return (
    <div className={styles.section}>
      <div className={styles.section__container}>
        <h1 className={styles.container__heading}>Login</h1>
        <p className={`${styles.container__subheading}`}>
          Please sign in to continue.
        </p>
        <form className={styles.container__form}>
          <input
            className={styles.form__input__email}
            type="email"
            placeholder="Email"
          />
          <input
            className={styles.form__input__password}
            type="password"
            placeholder="Password"
          />
          <button className={styles.form__button} type="submit">
            Login
          </button>
        </form>
        <p className={styles.container__text}>
          Don't have an account yet?{' '}
          <Link className={styles.container__backlink} to="/registration">
            Sign up.
          </Link>
        </p>
        <p className={styles.container__text}>
          <Link className={styles.container__backlink} to="/password-recovery">
            Forgot password?
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
