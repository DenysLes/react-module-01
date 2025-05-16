import ReactDOM from 'react-dom/client';
import data from './data.json';

function Card(recipe) {
  const { image, name, calories, time, servings } = recipe;
  return (
    <div>
      <img src={image} alt={name} width='480' />
      <h2>{name}</h2>
      <p>{calories} calories </p>
      <p>{time} min</p>
      <p>{servings} servings </p>
    </div>
  );
}

const datas = data[0];

// data.map((recipe) => { })
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Card
    id={data.id}
    image={datas.image}
    name={datas.name}
    calories={datas.calories}
    time={datas.time}
    servings={datas.servings}
  />
);
