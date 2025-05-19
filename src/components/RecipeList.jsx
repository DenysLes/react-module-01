import Recipe from "../components/Recipe";

export default function RecipeList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <Recipe
            image={item.image}
            name={item.name}
            calories={item.calories}
            time={item.time}
            servings={item.servings}
            quantity={item.quantity}
          />
        </li>
      ))}
    </ul>
  );
}
