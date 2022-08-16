import { Recipe } from "./Recipe";
import styles from "./RecipeList.module.css";

export const RecipeList = ({ recipes }) => {
  return (
    <div className={styles.cardContainer}>
      {recipes.map((item) => (
        <Recipe key={item.id} recipe={item} />
      ))}
    </div>
  );
};
