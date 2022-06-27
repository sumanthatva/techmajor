import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Electronics from './components/pages/Electronics';
import Books from './components/pages/Books';
import ProductDetail from './components/pages/ProductDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));
// Disabling strict mode, as it causes the constructor to be called twice.
// https://stackoverflow.com/questions/49206509/child-component-constructor-called-multiple-times/61443443#61443443
// Its NOT a bug. Having strict mode helps.
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/products" element={<App/>}/>
      <Route path="electronics" element={<Electronics/>}/>
      <Route path="books" element={<Books/>} />
      <Route path="/products/:productId" element={<ProductDetail/>}/>
    </Routes>
  </BrowserRouter>
);
