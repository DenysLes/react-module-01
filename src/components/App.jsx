import Recipe from "./Recipe";
import data from "../recepies.json";

export default function App() {
  return (
    <div>
      <Recipe
        id={recepies[0].id}
        image={recepies[0].image}
        name={recepies[0].name}
        calories={recepies[0].calories}
        time={recepies[0].time}
        servings={recepies[0].servings}
      />
      <Recipe
        id={recepies[1].id}
        image={recepies[1].image}
        name={recepies[1].name}
        calories={recepies[1].calories}
        time={recepies[1].time}
        servings={recepies[0].servings}
      />
      <Recipe
        id={recepies[2].id}
        image={recepies[2].image}
        name={recepies[2].name}
        calories={recepies[2].calories}
        time={recepies[2].time}
        servings={recepies[2].servings}
      />
    </div>
  );
}
