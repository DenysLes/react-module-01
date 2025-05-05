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

import React from 'react';
import ReactDOM from 'react-dom/client';

const p = (
  <p id="p-Id" className="p-class">
    This is paragraph .<br /> Hello world ! My name is Den
  </p>
);

const div = <div className="div-class">{p}</div>;

console.log(div);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(div);
