export default function Recipe(recipe) {
  const { image, name, calories, time, servings } = recipe;
  return (
    <div>
      <img src={image} alt={name} width="480" />
      <h2>{name}</h2>
      <p>{calories}</p>
      <p>{time}</p>
      <p>{servings}</p>
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
// />;
