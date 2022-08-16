import { useState } from "react";
import { RecipeList } from "../components/RecipeList";
import styles from "./Search.module.css";

export function Search() {
  const [searchedFood, setsearchedFood] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const fetchFavouriteUrl = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.REACT_APP_API_KEY}&ingredients=${inputValue}&number=21`;

  const filteredFood = (event) => {
    event.preventDefault();
    fetch(fetchFavouriteUrl)
      .then((res) => res.json())
      .then((jsonData) => {
        console.log({ searchedFood: jsonData });
        setsearchedFood(jsonData);
      });
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

      <RecipeList recipes={searchedFood} />
    </>
  );
}
