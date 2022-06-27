import React from 'react';
import ProductItem from './ProductItem';
import './ProductList.css';

class ProductList extends React.Component {

  render() {
    return(
      <div className='container'>
        <div className='row'>
        {this.props.products.map(prod => (
          <ProductItem prodName={prod.prodName} prodPrice={prod.prodPrice} imagePath={prod.imagePath}/>
        ))}
        </div>
      </div>
    );
  }
}

export default ProductList;