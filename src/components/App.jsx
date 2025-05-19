import RecipeList from "../components/RecipeList";
import recepies from "../recepies.json";

export default function App() {
  return (
    <div>
      <RecipeList items={recepies} />
    </div>
  );
}
