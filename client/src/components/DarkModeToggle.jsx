import React, { useContext } from 'react';
import { SharedContext } from '../contexts/SharedContext';
import styles from '../styles/DarkModeToggle.module.css';

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useContext(SharedContext);

  return (
    <label className={styles.switch}>
      <input
        type="checkbox"
        onChange={() => {
          toggleDarkMode(!isDarkMode);
        }}
      />
      <span className={`${styles.slider} ${styles.round}`}></span>
    </label>
  );
};

export default DarkModeToggle;
