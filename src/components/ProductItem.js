import React from 'react';
import './ProductItem.css';

class ProductItem extends React.Component {

  // Add lifecycle methods
  constructor(props) {
    super(props);
    console.log("ProductItem::Constructor called");
  }

  componentDidMount() {
    console.log("ProductItem::componentDidMount called");
  }

  componentDidUpdate() {
    console.log("ProductItem::componentDidUpdate called");
  }

  render() {
    console.log("ProductItem::render called");
    return (
      <div className='product-item'>
        <img src='images/shoes1.jpeg' alt='shoe' className='product-item__image' />
        <p className='product-item__name'> Mens Running Shoes </p>
        <p className='product-item__price'> ₹250 </p>
      </div>
    );
  }
}

export default ProductItem;