import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span> Cristian Prieto, España 2022</span>
      <a
        href="https://spoonacular.com/food-api"
        target="blank"
        className={styles.link}
      >
        SPOONACULAR API
      </a>
    </footer>
  );
};
