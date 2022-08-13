import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export function RecipeDetail() {
  const [recipeInfo, setRecipeInfo] = useState();
  const { id } = useParams();
  const recipeUrl = `https://api.spoonacular.com/recipes/${id}/information/?apiKey=125dfba079034731818d6a2a2ce5b955`;

  useEffect(() => {
    fetch(recipeUrl)
      .then((res) => res.json())
      .then((jsonData) => setRecipeInfo(jsonData));
  }, []);
  return (
    <>
      {recipeInfo ? (
        <div>
          <span>{recipeInfo.title}</span>
          <div>
            <img src={recipeInfo.image} alt=""></img>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: recipeInfo.instructions }}
            style={{
              listStyle: "inside",
            }}
          />
        </div>
      ) : null}
    </>
  );
}
