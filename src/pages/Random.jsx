import { useEffect, useState } from "react";
import styles from "./Random.module.css";
import { Link } from "react-router-dom";
export function Random() {
  const randomFetchUrl =
    "https://api.spoonacular.com/recipes/random?apiKey=a8a50db705674f5e9f467a400ea014f2&number=12";

  const [randomRecipe, setRrandomRecipe] = useState([]);
  useEffect(() => {
    fetch(randomFetchUrl)
      .then((res) => res.json())
      .then((jsonData) => setRrandomRecipe(jsonData.recipes))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h1 className={styles.title}>Random recipes</h1>
      {randomRecipe.length > 0 ? (
        <div className={styles.cardContainer}>
          {randomRecipe.map((item) => (
            <div key={item.id} className={styles.card}>
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
                to={`/recipes/${item.id}`}
              >
                <span className={styles.cardTitle}>{item.title}</span>
              </Link>
              <div className={styles.tags}>
                {item.glutenFree ? (
                  <span className={styles.gluten}>GLUTEN FREE</span>
                ) : null}
                {item.vegan ? (
                  <span className={styles.vegan}>VEGAN</span>
                ) : null}
                {item.vegetarian ? (
                  <span className={styles.vegetarian}>VEGETARIAN</span>
                ) : null}
              </div>
              <img
                className={styles.img}
                src={
                  item.image ? item.image : "https://via.placeholder.com/350"
                }
                alt={item.title}
              />
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
}
