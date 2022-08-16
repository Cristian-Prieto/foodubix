import { useEffect, useState } from "react";
import { RecipeList } from "../components/RecipeList";
import styles from "./Random.module.css";

const RANDOM_FETCH_URL = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12`;

export function Random() {
  const [randomRecipes, setRrandomRecipes] = useState([]);
  useEffect(() => {
    fetch(RANDOM_FETCH_URL)
      .then((res) => res.json())
      .then((jsonData) => setRrandomRecipes(jsonData.recipes))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h1 className={styles.title}>Random recipes</h1>
      {randomRecipes.length > 0 && <RecipeList recipes={randomRecipes} />}
    </>
  );
}
