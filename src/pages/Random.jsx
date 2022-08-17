import { useEffect, useState } from "react";
import { RecipeList } from "../components/RecipeList";
import BarLoader from "react-spinners/BarLoader";
import styles from "./Random.module.css";

const RANDOM_FETCH_URL = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=6`;

export function Random() {
  const [randomRecipes, setRrandomRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    fetch(RANDOM_FETCH_URL)
      .then((res) => res.json(), setIsLoading(true))
      .then((jsonData) => {
        setRrandomRecipes(jsonData.recipes);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
    return <BarLoader color="#44f1a1" />;
  }

  return (
    <>
      <h1 className={styles.title}>Random recipes</h1>
      {!isLoading && <RecipeList recipes={randomRecipes} />}
    </>
  );
}
