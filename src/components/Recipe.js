import React from 'react';

const Recipe = ({ title, calories, image, ingredients }) => {
    return(
        <div className="col-12 col-sm-6 col-md-4 py-3">
            <div className="card pt-4">
                <img 
                    src={image} 
                    alt={title} 
                    className="border rounded-circle align-self-center" 
                    width={110} 
                    height={110} 
                />
                <div className="card-body">
                    <h3 className="text-center">{title}</h3>
                    <ul className="list-unstyled py-3">
                        {ingredients.map((ingredient, index) => (
                            <li key={index}>- {ingredient.text}</li>
                        ))}
                    </ul>
                    <p>Calories: {calories}</p>
                </div>
            </div>
        </div>
    );
}

export default Recipe;