import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import User from './task_1/user';
import Profile from './task_2/user';
import reportWebVitals from './reportWebVitals';
import Product from './task_3/product';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>Task 1</h1>
    {<User />}
    <h1>Task 2</h1>
    {<Profile/>}
    <h1>Task 3</h1>
    {<Product/>}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
