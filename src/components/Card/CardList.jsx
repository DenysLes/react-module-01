import { Card } from "../Card";
import PropTypes from "prop-types";

export default function CardList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <Card
            image={item.image}
            name={item.name}
            calories={item.calories}
            quantity={item.quantity}
            time={item.time}
            servings={item.servings}
          />
        </li>
      ))}
    </ul>
  );
}

// export { CardList };

CardList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
