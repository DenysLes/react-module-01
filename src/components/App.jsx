import RecipeList from "../components/RecipeList";
import recepies from "../recepies.json";
import Section from "../components/Section";
import Recipe from "./Recipe";

export default function App() {
  return (
    <div>
      <Section title="TOP sale of the week">
        <RecipeList items={recepies} />
      </Section>
      <Section title="Popular">
        <Recipe
          id={recepies[0].id}
          image={recepies[0].image}
          name={recepies[0].name}
          calories={recepies[0].calories}
          time={recepies[0].time}
          servings={recepies[0].servings}
          quantity={recepies[0].quantity}
        />

        <Recipe
          id={recepies[3].id}
          image={recepies[3].image}
          name={recepies[3].name}
          calories={recepies[3].calories}
          time={recepies[3].time}
          servings={recepies[3].servings}
          quantity={recepies[3].quantity}
        />
      </Section>
    </div>
  );
}
