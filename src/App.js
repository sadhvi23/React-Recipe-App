import "./styles.css";
import "./app.css";
import React, { useEffect, useState } from "react";
import Recipe from "./recipe";

export default function App() {
  // Api Auth details
  const APP_ID = "ae87c63a";
  const APP_KEY = "9e12bf42049bdee65b0f652fb95fef64";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("Peanuts");

  // Basic hook action
  useEffect(() => {
    console.log("Effect has been run");
    getRecipes();
  }, [query]);

  // Function to get recipe data
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    console.log("Response :: ", data);
    setRecipes(data.hits);
  };

  // Update search attribute
  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  // Get search attribute after search has been clicked
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <div className="App">
      <h1>Recipe Book</h1>
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-input"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.calories}
            title={recipe.recipe.label}
            desc={recipe.recipe.calories}
            img={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}
