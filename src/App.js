import './App.css';
import ProductItem from './components/ProductItem';

function App() {
  return (
    <div className="App">
      <h2> Let's start, Tech Major! </h2>
      <ProductItem prodName={"Men's running shoes"} prodPrice={"₹250"} imagePath={"images/shoes1.jpeg"}/>
      <ProductItem prodName={"Men's trainers"} prodPrice={"₹1250"} imagePath={"images/shoes2.jpeg"}/>
      <ProductItem prodName={"Trendy shoes"} prodPrice={"₹2450"} imagePath={"images/shoes3.jpeg"}/>
    </div>
  );
}

export default App;
