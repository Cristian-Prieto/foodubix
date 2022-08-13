import { useState } from "react";

export function Recipes() {
  const [searchedFood, setsearchedFood] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const fetchFavouriteUrl = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=531bc52fc1d248b88284fd0fd70fa373&ingredients=${inputValue}&number=20`;

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
      <h1>Recipes</h1>
      <form onSubmit={filteredFood}>
        <input value={inputValue} onChange={handleInputValue} />
        <button type="submit"></button>
      </form>
      <ul>
        {searchedFood.map((item) => (
          <li>{item.title}</li>
        ))}
      </ul>
    </>
  );
}
