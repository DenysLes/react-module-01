// import React from 'react';
// import ReactDOM from 'react-dom/client';
import './index.css';
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

const card = (
  <div className='card mx-auto my-2' style={{ width: '18rem' }}>
    <img src={data[2].url} class='card-img-top' alt={data[2].title} />
    <div className='card-body'>
      <h5 className='card-title'>{data[2].title}</h5>
      <p className='card-text'>
        Some quick example text to build on the card title and make up the bulk of the cards
        content.
      </p>
      <a href='http' class='btn btn-primary'>
        Go somewhere
      </a>
    </div>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(card);
