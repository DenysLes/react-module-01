// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// import React from 'react';
import ReactDOM from 'react-dom/client';
import data from './data.json';

const card = data.map((recipe) => {
  return (
    <div className='card mx-auto my-2' style={{ width: '18rem' }}>
      <img src={recipe.image} class='card-img-top' alt={recipe.name} />
      <div className='card-body'>
        {data[0].name}
        <br></br>
        <h5 className='card-title'>{recipe.calories} calories</h5>
        <p className='card-text'>
          Cooking time : {recipe.time}
          <br></br>
          servings : {recipe.servings}
        </p>
        <a href='http' className='btn btn-primary'>
          Go somewhere 😉
        </a>
      </div>
    </div>
  );
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(card);
