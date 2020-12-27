import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import Recipe from './components/Recipe';

function App() {
  // Get app id & key from EDAMAM API
  const APP_ID = 'ede1a235';
  const APP_KEY = '8468fd152cd94feeed806e4061f1c3b9';

  // States
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('coffee');
  const [searchPlaceholder, setSearchPlaceholder] = useState("Type in your recipes!");

  // Use effect
  useEffect(() => {
    getRecipes();
  }, [query]);

  // Function to get recipes from EDAMAM API
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();

    setRecipes(data.hits);
    console.log(data.hits);

    // Check search input
    if (data.hits.length == 0) {
      setSearchPlaceholder("No result!");
      setSearch("");
    }

    else {
      setSearchPlaceholder("Type in your recipes!");
    }
  }

  return (
    <div className="App">
      <h1 className="text-center mt-3">Find your favorite recipes here</h1>

      <Form 
        search={search} 
        setSearch={setSearch}

        setQuery={setQuery}

        searchPlaceholder={searchPlaceholder}
      />

      <div className="container pt-3">
        <div className="row">
            {recipes.map((recipe, index) => {
              return(
                <Recipe 
                  key={index} 
                  title={recipe.recipe.label}
                  calories={recipe.recipe.calories}
                  image={recipe.recipe.image}
                  ingredients={recipe.recipe.ingredients}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
