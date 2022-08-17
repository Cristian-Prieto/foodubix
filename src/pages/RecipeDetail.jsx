import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BarLoader from "react-spinners/BarLoader";
import styles from "./RecipeDetail.module.css";

export function RecipeDetail() {
  const [recipeInfo, setRecipeInfo] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const recipeUrl = `https://api.spoonacular.com/recipes/${id}/information/?apiKey=${process.env.REACT_APP_API_KEY}`;
    fetch(recipeUrl)
      .then((res) => res.json(), setIsLoading(true))
      .then((jsonData) => {
        setRecipeInfo(jsonData);
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return <BarLoader color="#44f1a1" />;
  }

  return (
    recipeInfo && (
      <div className={styles.container}>
        <span className={styles.title}>{recipeInfo.title}</span>
        <div className={styles.imgContainer}>
          {recipeInfo.image ? (
            <img className={styles.img} src={recipeInfo.image} alt=""></img>
          ) : (
            <div className={styles.img}></div>
          )}
        </div>
        <ul className={styles.ingredients}>
          {recipeInfo.extendedIngredients.map((item) => (
            <li key={item.id}>{item.original}.</li>
          ))}
        </ul>
        <div className={styles.instructions}>
          {recipeInfo.analyzedInstructions?.[0]?.steps.map((item) => (
            <div className={styles.step} key={item.number}>
              <span
                style={{
                  color: "#4ade80",
                  fontWeight: "600",
                  paddingRight: "8px",
                }}
              >
                {item.number}
              </span>
              {item.step}
            </div>
          ))}
        </div>
      </div>
    )
  );
}
