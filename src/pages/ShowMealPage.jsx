import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ShowMealPage = () => {
  const [meal, setMeal] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMeal(data.meals[0]);
      });
  }, []);

  if (!meal) {
    return <p>Chargement</p>;
  }

  return (
    <main>
        
            <article key={meal.idMeal}>
            <h2>{meal.strMeal}</h2>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <p>{meal.strInstructions}</p>
            <ul>
                {Object.keys(meal)
                    .filter(key => key.startsWith('strIngredient') && meal[key])
                    .map((key, index) => (
                        <li key={index}>
                            {meal[key]} - {meal[`strMeasure${index + 1}`]}
                        </li>
                    ))}
            </ul>
        </article>
    </main>
);
};

export default ShowMealPage;