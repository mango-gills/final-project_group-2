import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GoogleButton from 'react-google-button';
import styles from '../styles/Registration.module.css';
import Footer from '../components/Footer';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { auth, db } from '../firebase';
import { setDoc, doc, Timestamp } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    confirmpassword: '',
    error: null,
    loading: false,
  });

  const navigate = useNavigate();

  const { name, email, password, confirmpassword, error, loading } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setData({ ...data, error: null, loading: true });
    if (!name || !email || !password || !confirmpassword) {
      return setData({ ...data, error: 'All fields are required' });
    }
    if (password !== confirmpassword) {
      return setData({ ...data, error: 'Passwords do not match' });
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
        confirmpassword: '',
        error: null,
        loading: false,
      });
      navigate('/login');
    } catch (err) {
      setData({ ...data, error: err.message, loading: false });
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const { displayName, email } = result.user;
      await setDoc(doc(db, 'users', result.user.uid), {
        uid: result.user.uid,
        name: displayName,
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
      navigate('/conversations');
    } catch (err) {
      setData({ ...data, error: err.message, loading: false });
    }

    // .then((re) => {
    //   const name = re.user.displayName;
    //   const email = re.user.email;
    //   console.log(re.user.photoURL);
    // })
  };
  return (
    <main className={styles.main__container}>
      <section className={styles.main__section}>
        <div className={styles.heading__container}>
          <div className={styles.heading}>Create an account</div>
        </div>
        <form className={styles.form__registration} onSubmit={handleSubmit}>
          <input
            className={`${styles.form__input} ${styles.username}`}
            id="username"
            name="name"
            placeholder="username"
            value={name}
            onChange={handleChange}
          ></input>
          <input
            className={`${styles.form__input} ${styles.email}`}
            id="email"
            placeholder="email"
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
          ></input>
          <input
            className={`${styles.form__input} ${styles.password}`}
            id="password"
            placeholder="password"
            type="text"
            name="password"
            value={password}
            onChange={handleChange}
          ></input>
          <input
            className={`${styles.form__input} ${styles.password}`}
            id="confirmpassword"
            placeholder="confirm password"
            type="text"
            name="confirmpassword"
            value={confirmpassword}
            onChange={handleChange}
          ></input>
          <button className={styles.form__button}>SIGNUP</button>
          <div className={styles.error__message}>{error}</div>
        </form>
        <p>Or</p>
        <GoogleButton style={{ width: 301 }} onClick={handleGoogleSignIn} />
        <br></br>
        <div className={styles.terms__text}>
          By continuing, you agree to accept our Privacy Policy and Terms of
          service.
        </div>
        <div className={styles.login__text}>
          Already have an account?
          <span>
            <Link className={styles.backlink} to="/login">
              Login
            </Link>
          </span>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Registration;
