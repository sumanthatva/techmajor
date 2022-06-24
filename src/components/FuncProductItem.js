import React, {useState} from 'react';
import './ProductItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

function FuncProductItem(props) {
  const [isFav, setIsFav] = useState({isFav: false});

  const toggleFav = () => {
    console.log("toggleFav::isFav: " + isFav);
    setIsFav(isFav==true?false: true);
    console.log("State toggled");
  }

  console.log("FuncProductItem called. isFav: " + isFav);

  // Read the values from props.
  const prodName = props.prodName;
  const prodPrice = props.prodPrice;
  const imagePath = props.imagePath;

  // React element as a variable!
  // Refer: https://reactjs.org/docs/introducing-jsx.html
  const imageElem = <img src={imagePath} alt='shoe' className='product-item__image' />

  return (
    <div className='product-item flx-inner'>
      {imageElem}
      <p className='product-item__name'> {prodName} </p>
      <p className='product-item__price'> {prodPrice} </p>
      <div>
        <button onClick={toggleFav}> {isFav == true? "Remove Favorite": "Add Favorite" } </button>
      </div>
      
      {isFav == true? (<FontAwesomeIcon icon={faThumbsUp} />): null }
    </div>
  );
  
}


export default FuncProductItem;