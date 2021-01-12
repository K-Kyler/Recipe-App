import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import Recipe from "./components/Recipe";
import * as ReactBootstrap from "react-bootstrap";
import { APP_KEY, APP_ID } from "./keys";

function App() {
    // Get app id & key from EDAMAM API

    // States
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("coffee");
    const [searchPlaceholder, setSearchPlaceholder] = useState(
        "Type in your recipes!"
    );
    const [loading, setLoading] = useState(false);

    // Use effect
    useEffect(() => {
        getRecipes();
    }, [query]);

    // Function to get recipes from EDAMAM API
    const getRecipes = async () => {
        const response = await fetch(
            `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
        );
        const data = await response.json();

        setRecipes(data.hits);
        console.log(data.hits);

        // Check search input and reloading spinner
        if (data.hits.length == 0) {
            setSearchPlaceholder("No result!");
            setSearch("");
            setLoading(false);
        } else {
            setSearchPlaceholder("Type in your recipes!");
            setLoading(true);
        }
    };

    return (
        <div className="App">
            <h1 className="text-center mt-3">
                Find your favorite recipes here
            </h1>

            <Form
                search={search}
                setSearch={setSearch}
                setQuery={setQuery}
                searchPlaceholder={searchPlaceholder}
                setLoading={setLoading}
            />

            {loading ? (
                <div className="container pt-3">
                    <div className="row">
                        {recipes.map((recipe, index) => {
                            return (
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
            ) : (
                <div className="text-center mt-5 pt-5">
                    <ReactBootstrap.Spinner
                        animation="border"
                        variant="success"
                    />
                </div>
            )}
        </div>
    );
}

export default App;
