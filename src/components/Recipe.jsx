export default function Recipe(recipe) {
  const { image, name, calories, time, servings } = recipe;
  return (
    <div>
      <img src={image} alt={name} width="480" />
      <h2>name : {name}</h2>
      <p>calories : {calories}</p>
      <p>time : {time}</p>
      <p>servings : {servings}</p>
      <p>quantity: {{ quantity } < 10 ? "Є в наявності" : "Не має в наявності"}</p>
    </div>
  );
}

const data = recepies;

<Recipe
  id={data.id}
  image={data.image}
  name={data.name}
  calories={data.calories}
  time={data.time}
  servings={data.servings}
  quantity={data.quantity}
/>;
