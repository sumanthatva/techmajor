import React from 'react';
import ProductItem from './ProductItem';
import './ProductList.css';

class ProductList extends React.Component {

  render() {
    return(
      <div className='container flx-outer'>
        {this.props.products.map(prod => (
          <ProductItem prodName={prod.prodName} prodPrice={prod.prodPrice} imagePath={prod.imagePath}/>
        ))}
        {/* <ProductItem prodName={this.props.products[0]} prodPrice={"₹250"} imagePath={"images/shoes1.jpeg"}/>
        <ProductItem prodName={"Men's trainers"} prodPrice={"₹1250"} imagePath={"images/shoes2.jpeg"}/>
        <ProductItem prodName={"Trendy shoes"} imagePath={"images/shoes3.jpeg"}/>
        <ProductItem /> */}
      </div>
    );
  }
}

export default ProductList;