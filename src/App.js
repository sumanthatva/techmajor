import { Link } from 'react-router-dom';
import './App.css';
import FuncProductItem from './components/FuncProductItem';
import ProductList from './components/ProductList';

function App() {
  const products = [{prodName: "Men's running shoes", prodPrice: "₹250", imagePath: "images/shoes1.jpeg"},
                    {prodName: "Men's trainers", prodPrice: "₹1250", imagePath: "images/shoes2.jpeg"},
                    {prodName: "Trendy shoes", imagePath: "images/shoes3.jpeg"},
                    {}];
  return (
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

        <Link to="/products/1234">Product 1234</Link>
      </nav>
      <ProductList products={products}/>
      {/* <div>
        <FuncProductItem prodName={"Women's running shoes"} prodPrice={"₹250"} imagePath={"images/shoes1.jpeg"} />
      </div> */}
    </div>
  );
}

export default App;
