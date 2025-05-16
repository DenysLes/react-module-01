import ReactDOM from 'react-dom/client';
import data from './data.json';

const Card = () => {
  return data.map((recipe) => {
    return (
      <div key={recipe.id} className='card mx-auto my-2' style={{ width: '18rem' }}>
        <img src={recipe.image} className='card-img-top' alt={recipe.name} />
        <div className='card-body'>
          {data[0].name}
          <br></br>
          <h5 className='card-title'>{recipe.calories} calories</h5>
          <p className='card-text'>Cooking time : {recipe.time}</p>
          <br></br>
          <p> servings : {recipe.servings}</p>
          <a href='http' className='btn btn-primary'>
            Go somewhere 😉
          </a>
        </div>
      </div>
    );
  });
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Card />);
