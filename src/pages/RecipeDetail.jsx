import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./RecipeDetail.module.css";
export function RecipeDetail() {
  const [recipeInfo, setRecipeInfo] = useState();
  const { id } = useParams();
  const recipeUrl = `https://api.spoonacular.com/recipes/${id}/information/?apiKey=125dfba079034731818d6a2a2ce5b955`;

  useEffect(() => {
    fetch(recipeUrl)
      .then((res) => res.json())
      .then((jsonData) => setRecipeInfo(jsonData));
    console.log(recipeInfo);
  }, []);
  return (
    <>
      {recipeInfo ? (
        <div className={styles.container}>
          <span className={styles.title}>{recipeInfo.title}</span>
          <div className={styles.imgContainer}>
            <img className={styles.img} src={recipeInfo.image} alt=""></img>
          </div>
          <ul className={styles.ingredients}>
            {recipeInfo.extendedIngredients.map((item) => (
              <li key={item.id}>{item.original}.</li>
            ))}
          </ul>
          {/* <div
            className={styles.steps}
            dangerouslySetInnerHTML={{ __html: recipeInfo.instructions }}
          /> */}
          <div className={styles.instructions}>
            {recipeInfo.analyzedInstructions[0].steps.map((item) => (
              <div className={styles.step}>
                {item.number}. {item.step}
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
}
