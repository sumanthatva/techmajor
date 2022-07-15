import React from 'react';
import ProductItem from './ProductItem';
import './ProductList.css';

class ProductList extends React.Component {

  constructor(props){
    super(props);
    this.state = {plist: []};
  }

  /**
   * Fetches data from a remote server and updates the state.
   */
  async getProductList() {
    // <Summary/>
    // fetch is used to make http calls. By default the method is 'GET'
    // Returns a promise which resolves to a response or an error.
    try{
      const response = await fetch('http://localhost:3001/products');
      if(response.ok) {
        // ok means the status is 2xx
        const data = await response.json();
        this.setState({plist: data});
      } else {
        // All 4xx and 5xx errors end up here.
        // Handle it as an error to make it go to the catch block.
        throw new Error("Server error");
      }
    } catch(error) {
      console.log("Fetch error: " + error);
    }
  }

  componentDidMount() {
    // <Summary/>
    // No server deployed to serve products. Hence use products from the props.
    // this.getProductList();
  }

  render() {
    console.log("productlist: " + this.state.plist.length);
    return(
      <div className='container'>
        <div className='row'>
        {/* Reading products from props, instead of the state */}
        { this.props.products.map(prod => (
          <ProductItem prodName={prod.prodName} prodPrice={prod.prodPrice} imagePath={prod.imagePath} productId={prod.productId}/>
        ))}
        </div>
      </div>
    );
  }
}

export default ProductList;