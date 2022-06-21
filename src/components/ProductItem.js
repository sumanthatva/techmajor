import React from 'react';
import './ProductItem.css';

class ProductItem extends React.Component {
  render() {
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