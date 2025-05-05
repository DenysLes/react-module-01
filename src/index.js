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

const root = ReactDOM.createRoot(document.getElementById('root'));
const element = React.createElement('div', {
  name: 'element',
  id: 'el-test-Id',
  className: 'el-test-class',
  a: 5,
  b: 10,
  //
  children: ['Hello world ! ', 'My ', 'name', ' ', 'DEN'],
});

console.log(element);

root.render(element);
