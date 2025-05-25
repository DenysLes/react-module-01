import PropTypes from "prop-types";

const Card = ({ image, name, calories, time, servings, quantity }) => {
  return (
    <div>
      <img src={image} alt={name} width="300" />
      <h2>userName :{name}</h2>
      <p>calories : {calories}</p>
      <p>time :{time}</p>
      <p>servising :{servings}</p>
      <p>quantity : {quantity > 10 ? "Є в наявності" : "Закінчується"}</p>
    </div>
  );
};

export { Card };

Card.propTypes = {
  //   id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  servings: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};
