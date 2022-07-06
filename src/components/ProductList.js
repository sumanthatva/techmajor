import React from 'react';
import ProductItem from './ProductItem';
import './ProductList.css';

class ProductList extends React.Component {

  constructor(props){
    super(props);
    this.state = {plist: []};
  }

  /**
   * Fetches data from a remote server and updates the state
   */
  getProductList() {
    // <Summary/>
    // fetch is used to make http calls. By default the method is 'GET'
    // Returns a promise which is 
    fetch('http://localhost:3001/products')
    .then(response => {
      if(response.ok) {
        // parse json only if the response is ok.
        return response.json();
      }
      // All 4xx and 5xx errors end up here.
      // Handle it as an error to make it go to the catch block.
      throw new Error("Server error");
    }).then(data => {
      this.setState({plist: data});
    }).catch(error => {
      console.log("Fetch error: " + error);
    })
  }

  componentDidMount() {
    this.getProductList();
  }

  render() {
    console.log("productlist: " + this.state.plist.length);
    return(
      <div className='container'>
        <div className='row'>
        { this.state.plist.map(prod => (
          <ProductItem prodName={prod.prodName} prodPrice={prod.prodPrice} imagePath={prod.imagePath} productId={prod.productId}/>
        ))}
        </div>
      </div>
    );
  }
}

export default ProductList;