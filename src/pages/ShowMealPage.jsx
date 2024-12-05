import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useGetMealById from "../hooks/useGetMealById";

const ShowMealPage = () => {
  const meal = useGetMealById();

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