import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Login.module.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase';
import { updateDoc, doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
    error: null,
    loading: false,
  });

  const history = useNavigate();

  const { email, password, error, loading } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setData({ ...data, error: null, loading: true });
    if (!email || !password) {
      return setData({ ...data, error: 'All fields are required' });
    }
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);

      await updateDoc(doc(db, 'users', result.user.uid), {
        isOnline: true,
      });
      setData({
        email: '',
        password: '',
        error: null,
        loading: false,
      });
      history('/');
    } catch (err) {
      setData({ ...data, error: err.message, loading: false });
    }
  };
  return (
    <div className={styles.section}>
      <div className={styles.section__container}>
        <h1 className={styles.container__heading}>Login</h1>
        <p className={`${styles.container__subheading}`}>
          Please sign in to continue.
        </p>
        <form className={styles.container__form} onSubmit={handleSubmit}>
          <input
            className={styles.form__input__email}
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleChange}
          />
          <input
            className={styles.form__input__password}
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
          />
          <button className={styles.form__button} type="submit">
            Login
          </button>
          {error ? <p className="error">{error}</p> : null}
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
