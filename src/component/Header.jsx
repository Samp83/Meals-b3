import { Link } from "react-router-dom";
const Header = () => {
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
        </>
    )
}
Header();
export default Header;