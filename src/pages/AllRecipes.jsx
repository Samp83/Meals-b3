import React, { useState, useEffect } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import { Link } from 'react-router-dom';


const AllRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async () => {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=e');
      const data = await response.json();
      setRecipes(data.meals);
  };

  useEffect(() => {
      fetchRecipes();
  }, []);

  if (recipes.length === 0) {
      return <main>En attente</main>;
  };

      if (recipes.length === 0) {
        return <main>En attente</main>;
      };

      return (
        <main>
          <Header/>
          <p>All recipes :</p>  
          {recipes.map((recipe) => (
            <article key={recipe.idMeal}>
            <h2>{recipe.strMeal}</h2>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <br></br>
            <Link to={"/Recipe/"+recipe.idMeal}>Voir la recette</Link>

        </article>
          ))}
        <Footer/>
        </main>
      );
};  


export default AllRecipes;