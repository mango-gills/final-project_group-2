import React, { useState } from 'react';
import { MdPresentToAll } from 'react-icons/md';
import styles from '../styles/Registration.module.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase';
import { setDoc, doc, Timestamp } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    error: null,
    loading: false,
  });

  const history = useNavigate();

  const { name, email, password, error, loading } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setData({ ...data, error: null, loading: true });
    if (!name || !email || !password) {
      return setData({ ...data, error: 'All fields are required' });
    }
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await setDoc(doc(db, 'users', result.user.uid), {
        uid: result.user.uid,
        name,
        email,
        createdAt: Timestamp.fromDate(new Date()),
        isOnline: true,
      });
      setData({
        name: '',
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
    <main className={styles.maincontainer}>
      <div className={styles.title}>Create an account</div>
      <section>
        <form className={styles.registration} onSubmit={handleSubmit}>
          {/* <MdPresentToAll className={styles.icon} /> */}
          <input
            className={`${styles.username} ${styles.icon}`}
            id="username"
            name="name"
            placeholder="username"
            value={name}
            onChange={handleChange}
          ></input>
          <input
            className={styles.email}
            id="email"
            placeholder="email"
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
          ></input>
          <input
            className={styles.password}
            id="password"
            placeholder="password"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          ></input>
          <input
            className={styles.password}
            id="confirm password"
            placeholder="confirm password"
            type="password"
          ></input>

          <button className={styles.submit}>SIGNUP</button>
          {error ? <p className="error">{error}</p> : null}
          <div className={styles.text}></div>
          <div className={styles.text}></div>
        </form>
      </section>
      <div className={styles.smtext}>
        By continuing, you agree to accept our Privacy Policy and Terms of
        service.
      </div>
      <div className={styles.mdtext}>
        Already have an account? <span>Login</span>
      </div>
    </main>
  );
};

export default Registration;
