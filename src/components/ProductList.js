import React from 'react';
import ProductItem from './ProductItem';
import './ProductList.css';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {plist: []};
  }

  successHandler(response) {
    // status can be 200, 201 etc -- success in getting data.
      // 300 - redirect, 400 -- bad request, 500 
      if(response.ok) {
        // ok means status 2xx.
        console.log("success");
        return response.json(); // returns a promise.
      } else {
        throw new Error("Something went wrong");
      }
  }

  componentDidMount() {
    // fetch.
    const productsFromServer = [{prodName: "Men's running shoes", prodPrice: "₹250", imagePath: "images/shoes1.jpeg", productId: "1"},
                    {prodName: "Men's trainers", prodPrice: "₹1250", imagePath: "images/shoes2.jpeg", productId: "2"},
                    {prodName: "Trendy shoes", prodPrice: "₹2250", imagePath: "images/shoes3.jpeg", productId: "3"}];

    fetch("http://localhost:3001/products")
    .then((response) => {
      this.successHandler(response);
    })
    .then((data) => {
      console.log("data: " + data);
    })
    .catch((error) => {
      console.log("http error: " + error);
    })

    // 1. Success
    // 2. Failure
    // 3. Fulfilled - suc/fail
    // 4. Pending -- waiting

    this.setState({plist: productsFromServer});
  }

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