import Header from "../component/Header";
import Footer from "../component/Footer";
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
const MealsSearchResults = () =>{
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const query = params.get('query');
    const [recipe, setRecipe] = useState([]);

    const fetchRecipe = async () => {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' +query);
        const data = await response.json();
        setRecipe(data.meals);
    };
  
    useEffect(() => {
        fetchRecipe();
    }, [query]);
  
    if (!recipe) {
        return <main>En attente</main>;
    };
    return (
        <>
        <Header />
            <h1>Recherche pour {query}</h1>
            {recipe.map((recipe) => (
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