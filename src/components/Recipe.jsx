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

// const datas = data;

// <Recipe
//   id={datas.id}
//   image={datas.image}
//   name={datas.name}
//   calories={datas.calories}
//   time={datas.time}
//   servings={datas.servings}
// />;
