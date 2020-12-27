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
  }

  return (
    <div className="App">
      <Form 
        search={search} 
        setSearch={setSearch}

        setQuery={setQuery}
      />
      <div className="container pt-5">
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
