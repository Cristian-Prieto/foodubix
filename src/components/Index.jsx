import styles from "./Index.module.css";
export function Index() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <div className={styles.textLine}>
          <span style={{ color: "#4ade80" }}>2.500</span>
          <span> + Ingredients</span>
        </div>
        <div className={styles.textLine}>
          <span style={{ color: "#4ade80" }}>5.000</span>
          <span> + Recipes</span>
        </div>
      </div>
    </div>
  );
}
