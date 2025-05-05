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

const p = React.createElement('p', {
  id: 'pId',
  className: 'pClass',
  children: ['This is paragraph .', <br />, 'Hello world ! ', 'My ', 'name ', 'is ', 'Den'],
});
const root = ReactDOM.createRoot(document.getElementById('root'));
const div = React.createElement('div', {
  id: 'el-test-Id',
  className: 'el-test-class',
  a: 5,
  b: 10,
  children: p,
});

root.render(div);

console.log(div);
