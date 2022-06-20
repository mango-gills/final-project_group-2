import React, { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { sendPasswordResetEmail } from 'firebase/auth';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from '../styles/Password.module.css';
import { auth } from '../firebase';
import { duration } from 'moment';

import { AuthContext } from '../contexts/auth';
import Footer from '../components/Footer';

const PasswordRecovery = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const { user } = useContext(AuthContext);

  const forgotPassword = (email) => {
    return sendPasswordResetEmail(auth, email, {
      url: 'http://localhost:3000/login',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await forgotPassword(email);
      setError('');
      // .then((response) => {
      // console.log(response);
      toast('Email sent, check your email', {
        theme: 'dark',
      });

      // .catch((err) => console.log(err.message));
    } catch (err) {
      switch (err.message) {
        case 'Firebase: Error (auth/user-not-found).':
          setError('User not found');
          break;
        default:
          setError('An error occured. Try again');
      }
    }
  };

  return user ? (
    <Navigate to="/conversations" />
  ) : (
    <main className={styles.main__container}>
      <section className={styles.main__section}>
        <div className={styles.heading}>Recover Password</div>
        <form className={styles.form__password} onSubmit={handleSubmit}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`${styles.form__input} ${styles.email}`}
            id="email"
            placeholder="email address"
            type="text"
          ></input>
          <button className={styles.form__button}>SUBMIT</button>
          <div className={styles.error__message}>{error}</div>
        </form>
        <ToastContainer />
        <Link className={styles.backlink} to="/login">
          Go back to Login page
        </Link>
      </section>
      <Footer />
    </main>
  );
};

export default PasswordRecovery;
