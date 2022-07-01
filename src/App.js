import { Link } from 'react-router-dom';
import './App.css';

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Electronics from './components/pages/Electronics';
import Books from './components/pages/Books';
import ProductDetail from './components/pages/ProductDetail';
import Home from './components/pages/Home';
import { useState } from 'react';
import Checkout from './components/pages/checkout';

function App() {
  const products = [{prodName: "Men's running shoes", prodPrice: "₹250", imagePath: "images/shoes1.jpeg", productId: "1"},
                    {prodName: "Men's trainers", prodPrice: "₹1250", imagePath: "images/shoes2.jpeg", productId: "2"},
                    {prodName: "Trendy shoes", prodPrice: "₹2250", imagePath: "images/shoes3.jpeg", productId: "3"}];
  const [isUserLoggedIn] = useState(true);

  return (
    <BrowserRouter>
       <div className="App">
      <h2> Let's start, Tech Major! </h2>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/electronics">Electronics</Link> |{" "}
        <Link to="/books">Books</Link> | {" "}
        {/* Phones redirects to electronics */}
        <Link to="/phones">Phones</Link> | {" "} 
        <Link to="/products/1234">Product 1234</Link> | {" "}
        <Link to="/checkout">Checkout</Link>

      </nav>
      
    </div>
    <Routes>
      <Route path="/" element={<Home products={products}/>}/>
      <Route path="/products" element={<Home products={products}/>}/>
      <Route path="/electronics" element={<Electronics/>}/>
      <Route path="/books" element={<Books/>} />
      <Route path="/products/:productId" element={<ProductDetail/>}/>
      {/* Redirect */}
      <Route path="/phones" element={<Navigate to="/electronics"/>} />

      {/* Conditional routing */}
      <Route 
            path="/checkout/*" 
            element={isUserLoggedIn? <Checkout/> : <Navigate to="/products/abcd" replace /> } />
    </Routes>
  </BrowserRouter>

   
  );
}

export default App;
