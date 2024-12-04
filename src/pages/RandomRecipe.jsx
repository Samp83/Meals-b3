import React, { useState, useEffect } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';

const RandomRecipes = () => {
    const [recipes, setRandomRecipes] = useState([]);

    const fetchRecipes = async () => {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
        const data = await response.json();
        setRandomRecipes(data.meals);
    };

    useEffect(() => {
        fetchRecipes();
    }, []);

    if (recipes.length === 0) {
        return <main>En attente</main>;
    };

    return (
        <main>
            <Header />
            <button onClick={fetchRecipes}>Find a new random recipe</button>
            {recipes.map((recipe) => (
                <article key={recipe.idMeal}>
                <h2>{recipe.strMeal}</h2>
                <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                <p>{recipe.strInstructions}</p>
                <ul>
                    {Object.keys(recipe)
                        .filter(key => key.startsWith('strIngredient') && recipe[key])
                        .map((key, index) => (
                            <li key={index}>
                                {recipe[key]} - {recipe[`strMeasure${index + 1}`]}
                            </li>
                        ))}
                </ul>
            </article>
            ))}
            <Footer />
        </main>
    );
};

export default RandomRecipes;