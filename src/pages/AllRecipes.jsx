import React, { useState, useEffect } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import { Link } from 'react-router-dom';
import useGetMeals from '../hooks/useGetMeals';


const AllRecipes = () => {
  const {recipes} = useGetMeals();
  console.log(recipes);


      if (!recipes) {
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