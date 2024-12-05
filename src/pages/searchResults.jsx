import Header from "../component/Header";
import Footer from "../component/Footer";
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import  useGetMeals  from "../hooks/useGetMeals";
const MealsSearchResults = () =>{
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query');
    const { recipes, loading } = useGetMeals(query);
  
    if (loading) {
        return <main>En attente</main>;
    };

    if (!loading && !recipes) {
        return (
            <> 
            <Header />
            <main>Aucun résultat</main>;
            <Footer />
            </>
            );
    }
    return (
        <>
        <Header />
            <h1>Recherche pour {query}</h1>
            {recipes.map((recipe) => (
            <article key={recipe.idMeal}>
            <h2>{recipe.strMeal}</h2>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <br></br>
            <Link to={"/Recipe/"+recipe.idMeal}>Voir la recette</Link>

        </article>
          ))}
        <Footer />
        </>
    )
}

export default MealsSearchResults;