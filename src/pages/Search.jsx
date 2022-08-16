import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Search.module.css";

export function Search() {
  const [searchedFood, setsearchedFood] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const fetchFavouriteUrl = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=a8a50db705674f5e9f467a400ea014f2&ingredients=${inputValue}&number=20`;

  const filteredFood = (event) => {
    event.preventDefault();
    fetch(fetchFavouriteUrl)
      .then((res) => res.json())
      .then((jsonData) => setsearchedFood(jsonData));
    console.log(searchedFood);
  };

  const handleInputValue = (event) => {
    setInputValue(event.target.value);
    console.log(inputValue);
  };

  return (
    <>
      <h1 className={styles.title}>Recipes</h1>
      <form onSubmit={filteredFood} className={styles.formContainer}>
        <input
          className={styles.input}
          value={inputValue}
          onChange={handleInputValue}
          placeholder="Ingredient..."
        />
        <button className={styles.btn} type="submit">
          Search
        </button>
      </form>

      <ul className={styles.list}>
        {searchedFood.map((item) => (
          <li className={styles.recipe} key={item.id}>
            <Link to={`/recipes/${item.id}`} className={styles.linkFood}>
              <span className={styles.item}>{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
