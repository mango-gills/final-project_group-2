import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { confirmPasswordReset } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from '../firebase';

import styles from '../styles/Password.module.css';
import Footer from '../components/Footer';
import { useState } from 'react';

const PasswordReset = () => {
  const resetPassword = (oobCode, newPassword) => {
    return confirmPasswordReset(auth, oobCode, newPassword);
  };

  const useQuery = () => {
    const location = useLocation();
    return new URLSearchParams(location.search);
  };

  const navigate = useNavigate();

  const query = useQuery();
  // console.log(query.get('mode'));
  // console.log(query.get('oobCode'));
  // console.log(query.get('continueUrl'));

  const [newPassword, setNewPassword] = useState('');

  const handleChange = async (e) => {
    e.preventDefault();

    await resetPassword(query.get('oobCode'), newPassword)
      .then(
        toast('Password Has been changed', {
          theme: 'dark',
          autoClose: 3000,
        })
      )
      .catch((err) => console.log(err.message));
    setTimeout(() => {
      navigate('/login');
    }, 3000);
  };

  return (
    <main className={styles.main__container}>
      <section className={styles.main__section}>
        <div className={styles.heading}>Reset Password</div>
        <form className={styles.form__password} onSubmit={handleChange}>
          <input
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
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
          <ToastContainer />
        </form>

        <Link className={styles.backlink} to="/login">
          Go back to Login page
        </Link>
      </section>
      <Footer />
    </main>
  );
};

export default PasswordReset;
