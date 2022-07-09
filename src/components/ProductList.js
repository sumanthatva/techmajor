import React from 'react';
import ProductItem from './ProductItem';
import './ProductList.css';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {plist: []};
  }

  /**
   * Fetches data from a remote server and updates the state
   */
  async getProductList() {
    // <Summary/>
    // fetch is used to make http calls. By default the method is 'GET'
    // Returns a promise which is 
    try {
      const response = await fetch('http://localhost:3001/products');
      if(response.ok) {
        const data = await response.json();
        this.setState({plist: data});
      } else {
        throw new Error("Server Error");
      }
    } catch (error) {
      console.log("Fetch error: " + error);
    }
  }

  componentDidMount() {
    this.getProductList();
  }

  render() {
    console.log("productlist: " + this.state.plist.length);
    return(
      <div className='container'>
        <div className='row'>

        {
          this.state.plist.map(prod => (
            <ProductItem prodName={prod.prodName} prodPrice={prod.prodPrice} imagePath={prod.imagePath} productId={prod.productId}/>
          ))
        }
        </div>
      </div>
    );
  }
}

export default ProductList;