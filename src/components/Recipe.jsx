import PropTypes from "prop-types";

export default function Recipe(recipe) {
  const { image, name, calories, time, servings, quantity } = recipe;
  return (
    <div>
      <img src={image} alt={name} width="480" />
      <h2>name : {name}</h2>
      <p>calories : {calories}</p>
      <p>time : {time}</p>
      <p>servings : {servings}</p>
      <p>quantity: {quantity > 10 ? "Є в наявності" : "Закінчується"}</p>
    </div>
  );
}

// const data = recepies;

// <Recipe
//   id={data.id}
//   image={data.image}
//   name={data.name}
//   calories={data.calories}
//   time={data.time}
//   servings={data.servings}
//   quantity={data.quantity}
// />;

Recipe.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  servings: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};
