import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ title, desc, img, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <h2>{desc}</h2>
      <img className={style.image} src={img} alt="" />
    </div>
  );
};

export default Recipe;
