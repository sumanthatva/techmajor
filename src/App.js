import { Link } from 'react-router-dom';
import './App.css';

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Electronics from './components/pages/Electronics';
import Books from './components/pages/Books';
import ProductDetail from './components/pages/ProductDetail';
import Home from './components/pages/Home';
import { useContext, useEffect } from 'react';
import Checkout from './components/pages/checkout';
import Login from './components/pages/Login';
import AuthContext from './context/auth-context';

function App() {
  const products = [{prodName: "Men's running shoes", prodPrice: "₹250", imagePath: "images/shoes1.jpeg", productId: "1"},
                    {prodName: "Men's trainers", prodPrice: "₹1250", imagePath: "images/shoes2.jpeg", productId: "2"},
                    {prodName: "Trendy shoes", prodPrice: "₹2250", imagePath: "images/shoes3.jpeg", productId: "3"}];

  const authCtx = useContext(AuthContext);
  console.log("APP::islogged in: " + authCtx.isLoggedIn);

  useEffect(() => {
    console.log("APP::Useeffect to read from localstorage");
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if(isLoggedIn === "TRUE") {
      const email = localStorage.getItem("email");
      const name = localStorage.getItem("name");
      const token = localStorage.getItem("token");
      authCtx.onLogin(email, name, token);
    }
  }, []);

  return (
    <BrowserRouter>
      {/** the 'authInfo' state variable is assigned to the value prop. 
          When the state 'authInfo' changes, all consumers of the context will be re-rendered with the latest value of authInfo.
      */}
      
       <div className="App">
      {/* <h2> Let's start, Tech Major! </h2> */}
      <div className='container'>
      {/* <nav className='navbar navbar-dark justify-content-center'> */}
        <nav className='navbar navbar-expand-lg navbar-light' style={{"background-color": "#ffd733"}}>
          <Link class="navbar-brand" to="/">TechMajor</Link>
          <Link className='nav-link active' to="/electronics">Electronics</Link> 
          <Link className='nav-link' to="/books">Books</Link>
          {/* Phones redirects to electronics */}
          <Link className='nav-link' to="/phones">Phones</Link> 
          <Link className='nav-link' to="/products/1234">Product 1234</Link>
          <Link className='nav-link' to="/checkout">Checkout</Link>
          {authCtx.isLoggedIn? 
            <button className='nav-link ms-auto' onClick={authCtx.onLogout}>Logout</button> :
            <Link className='nav-link ms-auto' to="/login">Login</Link>}
          

        </nav>
      </div>
      
    </div>
    <div className='container'>
    <Routes>
      <Route path="/" element={<Home products={products}/>}/>
      <Route path="/products" element={<Home products={products}/>}/>
      <Route path="/electronics" element={<Electronics/>}>
        <Route path=":id" element={<p> Some element </p>} />
      </Route>
      <Route path="/books" element={<Books/>} />
      <Route path="/products/:productId" element={<ProductDetail/>}/>
      <Route path="/login" element={<Login/>}/>

      {/* Redirect */}
      <Route path="/phones" element={<Navigate to="/electronics"/>} />

      {/* Conditional routing */}
      <Route 
            path="/checkout/*" 
            element={<Checkout/> } />
    </Routes>
    </div>
    
  </BrowserRouter>

   
  );
}

export default App;
