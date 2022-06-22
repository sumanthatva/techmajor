import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
// Disabling strict mode, as it causes the constructor to be called twice.
// https://stackoverflow.com/questions/49206509/child-component-constructor-called-multiple-times/61443443#61443443
// Its NOT a bug. Having strict mode helps.
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);
