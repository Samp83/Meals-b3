import { Link, useNavigate } from "react-router-dom";
import MealsSearchResults from "../pages/searchResults";
const Header = () => {
    const navigate = useNavigate();
    
    const HandleSubmitSearch = (event) =>{
      event.preventDefault();
      const query = event.target.query.value; 
      navigate("/search-results?query=" + query) 
    };
    return (
        <>
            <header>
                <h1>Les recettes de Sami</h1>
            </header>
            <ul>
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/allRecipes">Toutes les recettes</Link>
                </li>
                <li>
                    <Link to="/randomRecipe">Recette Aléatoire</Link>
                </li>
            </ul>
            <form method="get" onSubmit={HandleSubmitSearch}>
          <label>
            Recherche :
            <input type="text" name="query" />
          </label>

          <input type="submit" />
        </form>
        </>
    )
}

export default Header;