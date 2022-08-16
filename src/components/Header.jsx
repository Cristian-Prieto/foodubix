import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <span style={{ color: "#4ade80 " }}>Food</span>
      <span style={{ color: "#f1f5f9 " }}>ubix</span>
    </header>
  );
};
