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

    // Read the values from props.
    const prodName = this.props.prodName;
    const prodPrice = this.props.prodPrice;
    const imagePath = this.props.imagePath;

    // React element as a variable!
    // Refer: https://reactjs.org/docs/introducing-jsx.html
    const imageElem = <img src={imagePath} alt='shoe' className='product-item__image' />

    return (
      <div className='product-item'>
        {imageElem}
        <p className='product-item__name'> {prodName} </p>
        <p className='product-item__price'> {prodPrice} </p>
      </div>
    );
  }
}

ProductItem.defaultProps = {
  prodName: "Shoes",
  prodPrice: "₹500",
  imagePath: "images/shoes1.jpeg"
}

export default ProductItem;