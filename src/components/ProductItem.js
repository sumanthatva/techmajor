import React from 'react';
import './ProductItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { Navigate } from 'react-router-dom';

class ProductItem extends React.Component {

  // Add lifecycle methods
  constructor(props) {
    super(props);
    console.log("ProductItem::Constructor called");

    this.state = {isFav: false, isNavigate: false};
  }

  componentDidMount() {
    console.log("ProductItem::componentDidMount called");
  }

  componentDidUpdate() {
    console.log("ProductItem::componentDidUpdate called");
  }

  toggleFav = (e) => {
    // Prevent propagating the event.
    // The elements encapsulating the button that was clicked will NOT get the click event.
    e.stopPropagation();
    let isFav = this.state.isFav;
    this.setState({isFav: !isFav});
    console.log("State toggled");
  }

  divClickHandler = () => {
    console.log("div clicked");
    this.setState({isNavigate: true});
  }

  render() {
    console.log("ProductItem::render called: " + this.props.productId);

    // Read the values from props.
    const prodName = this.props.prodName;
    const prodPrice = this.props.prodPrice;
    const imagePath = this.props.imagePath;

    // React element as a variable!
    // Refer: https://reactjs.org/docs/introducing-jsx.html
    const imageElem = <img src={imagePath} alt='shoe' className='product-item__image' />

    return (
      this.state.isNavigate? <Navigate to={"/products/" + this.props.productId}/> :
      
      <div className='product-item col-md-4' 
            key={this.props.productId}
            onClick={this.divClickHandler}>
        {imageElem}
        <p className='product-item__name'> {prodName} </p>
        <p className='product-item__price'> {prodPrice} </p>
        <div>
          <button onClick={this.toggleFav}> {this.state.isFav? "Remove Favorite": "Add Favorite" } </button>
        </div>
        
        {this.state.isFav? (<FontAwesomeIcon icon={faThumbsUp} />): null }
      </div>
    );
  }
}

ProductItem.defaultProps = {
  prodName: "Shoes",
  prodPrice: "₹500",
  imagePath: "images/shoes1.jpeg",
  productId: ""
}

export default ProductItem;