import styles from '../styles/DarkModeToggle.module.css';

const DarkModeToggle = ({isDarkMode, toggleDarkMode}) => {
  return (
    <label className={styles.switch}>
      <input type="checkbox" onChange={() => {
        toggleDarkMode(!isDarkMode);
      }} />
      <span className={`${styles.slider} ${styles.round}`}></span>
    </label>
  );
};

export default DarkModeToggle;
