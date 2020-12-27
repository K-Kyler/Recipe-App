import React from 'react';

const Recipe = ({ title, calories, image, ingredients }) => {
    return(
        <div className="col-12 col-sm-6 col-md-4 py-3">
            <div className="card">
                <img src={image} alt={title} />
                <div className="card-body">
                    <h5>{title}</h5>
                    <ul className="list-unstyled">
                        {ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient.text}</li>
                        ))}
                    </ul>
                    <p>Calories: {calories}</p>
                </div>
            </div>
        </div>
    );
}

export default Recipe;