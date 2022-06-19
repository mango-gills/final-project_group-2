import  React, { useState, useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { sendPasswordResetEmail } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SharedContext } from "../contexts/SharedContext";
import theme from "../styles/globals.module.css";
import styles from '../styles/Password.module.css';
import { auth } from '../firebase';
import { duration } from 'moment';

import { AuthContext } from '../contexts/auth';
import Footer from '../components/Footer';

const PasswordRecovery = () => {
  const { isDarkMode } = useContext(SharedContext);
  const [email, setEmail] = useState('');

  const { user } = useContext(AuthContext);

  const forgotPassword = (email) => {
    return sendPasswordResetEmail(auth, email, {
      url: 'http://localhost:3000/login',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    forgotPassword(email)
      .then((response) => {
        console.log(response);
        toast('Email sent, check your email', {
          theme: 'dark',
        });
      })
      .catch((e) => console.log(e.message));
  };

  return user ? (
    <Navigate to="/conversations" />
  ) : (
    <main id={ isDarkMode ? theme.dark : theme.light}  className={styles.main__container}>
      <section className={styles.main__section}>
        <div className={styles.heading}>Recover Password</div>
        <form className={styles.form__password} onSubmit={handleSubmit}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`${styles.form__input} ${styles.email}`}
            id="email"
            placeholder="Email Address"
            type="email"
          ></input>
          <button className={styles.form__button}>SUBMIT</button>
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
