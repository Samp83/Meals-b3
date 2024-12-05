import { Link } from "react-router-dom";

const MealCard = ({ meal }) => {
  return (
    <article>
      <p>{meal.strMeal}</p>
      <img width={"300px"} src={meal.strMealThumb} alt={meal.strMeal} />
      <Link to={`/meal/${meal.idMeal}`}>Voir la recette</Link>
    </article>
  );
};

export default MealCard;