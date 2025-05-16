import Recipe from './Recipe';
import data from '../data.json';

export default function App() {
  return (
    <Recipe
      id={data.id}
      image={data.image}
      name={data.name}
      calories={data.calories}
      time={data.time}
      servings={data.servings}
    />
  );
}
