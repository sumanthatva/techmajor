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

/** Routing basics 
 * ref: https://reactrouter.com/docs/en/v6/getting-started/tutorial
 * 1. Use react-router-dom version 6. (https://www.npmjs.com/package/react-router-dom)
 * 2. BrowserRouter - BrowserRouter is a router implementation that uses the HTML5 history API to keep your UI in sync with the URL
 * 3. Routes - select the path with the best match for the URL. In version 5, the <Switch> component used to select the first match
 * 4. Route - A conditionally rendered component. It is rendered if teh path matches the current location (URL)
 * 5. Link - is an element that lets the user navigate to another page by clicking or tapping on it. 
*/