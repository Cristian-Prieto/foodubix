import { Link } from "react-router-dom";
import styles from "./Recipe.module.css";

export const Recipe = ({ recipe }) => {
  console.log(recipe);
  return (
    <div key={recipe.id} className={styles.card}>
      <Link
        style={{
          color: "#f1f5f9",
          display: "flex",
          textDecoration: "none",
          padding: "0.5rem 0",
          height: "3rem",
          flexDirection: "column",
          alignContent: "center",
          justifyContent: "center",
        }}
        to={`/recipes/${recipe.id}`}
      >
        <span className={styles.cardTitle}>{recipe.title}</span>
      </Link>
      <div className={styles.tags}>
        {recipe.glutenFree && (
          <span className={styles.gluten}>GLUTEN FREE</span>
        )}
        {recipe.vegan && <span className={styles.vegan}>VEGAN</span>}
        {recipe.vegetarian && (
          <span className={styles.vegetarian}>VEGETARIAN</span>
        )}
      </div>
      <img
        className={styles.img}
        src={recipe.image ? recipe.image : "https://via.placeholder.com/350"}
        alt={recipe.title}
      />
    </div>
  );
};
