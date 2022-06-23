import './App.css';
import ProductList from './components/ProductList';

function App() {
  const products = [{prodName: "Men's running shoes", prodPrice: "₹250", imagePath: "images/shoes1.jpeg"},
                    {prodName: "Men's trainers", prodPrice: "₹1250", imagePath: "images/shoes2.jpeg"},
                    {prodName: "Trendy shoes", imagePath: "images/shoes3.jpeg"},
                    {}];
  return (
    <div className="App">
      <h2> Let's start, Tech Major! </h2>
      <ProductList products={products}/>
    </div>
  );
}

export default App;
