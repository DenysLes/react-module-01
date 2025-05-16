import Recipe from "./Recipe";
import data from "../data.json";

export default function App() {
  return (
    <div>
      <Recipe
        id={data[0].id}
        image={data[0].image}
        name={data[0].name}
        calories={data[0].calories}
        time={data[0].time}
        servings={data[0].servings}
      />
      <Recipe
        id={data[1].id}
        image={data[1].image}
        name={data[1].name}
        calories={data[1].calories}
        time={data[1].time}
        servings={data[0].servings}
      />
      <Recipe
        id={data[2].id}
        image={data[2].image}
        name={data[2].name}
        calories={data[2].calories}
        time={data[2].time}
        servings={data[2].servings}
      />
    </div>
  );
}
