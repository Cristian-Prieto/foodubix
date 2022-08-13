import { useEffect, useState } from "react";
import styles from "./Random.module.css";
export function Random() {
  const randomFetchUrl =
    "https://api.spoonacular.com/recipes/random?apiKey=531bc52fc1d248b88284fd0fd70fa373&number=6";

  const [randomRecipe, setRrandomRecipe] = useState([]);
  useEffect(() => {
    fetch(randomFetchUrl)
      .then((res) => res.json())
      .then((jsonData) => setRrandomRecipe(jsonData.recipes))
      .catch((error) => console.log(error));
  }, []);
  console.log(randomRecipe);
  return (
    <>
      <div className={styles.sectionContainer}>
        <h1>Random recipes</h1>
        {randomRecipe.length > 0 ? (
          <span className={styles.title}>
            {randomRecipe.map((item) => (
              <li key={item.id} className={styles.card}>
                {item.title}
                <img className={styles.img} src={item.image} alt="" />
              </li>
            ))}
          </span>
        ) : null}
      </div>
    </>
  );
}
