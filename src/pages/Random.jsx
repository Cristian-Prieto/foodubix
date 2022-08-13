import { useEffect, useState } from "react";
import styles from "./Random.module.css";
import { Link } from "react-router-dom";
export function Random() {
  const randomFetchUrl =
    "https://api.spoonacular.com/recipes/random?apiKey=125dfba079034731818d6a2a2ce5b955&number=12";

  const [randomRecipe, setRrandomRecipe] = useState([]);
  useEffect(() => {
    fetch(randomFetchUrl)
      .then((res) => res.json())
      .then((jsonData) => setRrandomRecipe(jsonData.recipes))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h1 style={{ backgroundColor: "green" }}>Random recipes</h1>
      {randomRecipe.length > 0 ? (
        <div className={styles.cardContainer}>
          {randomRecipe.map((item) => (
            <div key={item.id} className={styles.card}>
              <Link to={`/recipes/${item.id}`}>{item.title}</Link>

              <img className={styles.img} src={item.image} alt="" />
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
}
