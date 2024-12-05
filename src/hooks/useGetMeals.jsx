
import { useEffect, useState } from "react";

// je créé un hook qui servira à la fois pour les résultats de recherche
// et pour la récupération de "toutes" les recettes
// car l'url est la même pour les deux
// je passe en parametre de la fonction du hook
// la requête de recherche de l'utilisateur
// qui peut être null, si on est pas sur les résultats de recherche
const useGetMeals = (query = null) => {
  const [recipes, setRecipes] = useState(null);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    // je créé la variable url, en fonction de si
    // on est sur une recherche ou pas (donc s'il y la requête de recherche)
    let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

    if (query) {
      url = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + query;
    }

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setRecipes(data.meals);
      })
      .finally(() => {
        setloading(false);
      });
  }, [query]);

  return { recipes, loading };
};

export default useGetMeals;
