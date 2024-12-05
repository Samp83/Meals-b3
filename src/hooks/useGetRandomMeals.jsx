import { useState, useEffect } from "react";
const useGetRanddomMeals = () => {
    const [recipes, setRandomRecipes] = useState([]);

    const fetchRecipes = async () => {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
        const data = await response.json();
        setRandomRecipes(data.meals);
    };

    useEffect(() => {
        fetchRecipes();
    }, []);
    return recipes;

}

export default useGetRanddomMeals;
