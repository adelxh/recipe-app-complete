import React from 'react'; 

import RecipeDetails from './RecipeDetails';
const Recipe = ({recipe}) => {
    const {label, image, url, ingredients, calories} = recipe.recipe; 
    return (
        <div className="recipe">
            <h2>{label}</h2>
            <img src={image} alt={image}/>
            <h3>{calories.toFixed(0)} Cals</h3>
            <a href={url} target="_blank" rel="noopener noreferrer">See Website</a>

            <button>Ingredients</button>
            <RecipeDetails ingredients={ingredients}/>
        </div>
    );
}; 

export default Recipe; 