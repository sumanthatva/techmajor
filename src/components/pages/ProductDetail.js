import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetail() {
  const params = useParams();
  console.log(params.productId);

  // State to track new review form render
  const [isShowNewReview, setIsShowNewReview] = useState(false);


  return (
    <div className='container'>
      {/* <h2>Product Detail Page</h2>
      <p>{params.productId}</p> */}
      <div className='row' id='product-details-container'>
        <div className='col-md-4 col-sm-12 prod-details__left-col' style={{"text-align": "center"}}>
          <img className='prod-details-img' src={"../images/shoes2.jpeg"} alt="alt" width={"90%"}/>
          <button className='prod-details__add-cart-button'>Add to cart</button>
        </div>
        <div className='col-md-8 col-sm-12'>
          <div className='row'>
            <h3>Awesome shoes</h3>
          </div>
          <div className='row'>
            <p>4.2 ratings from 1000 ratings and 20 reviews </p>
          </div>
          <div className='row'>
            <h2> ₹2250 </h2>
          </div>
          <div className='row'>
            <h6>Specifications</h6>
            <p> Something something something</p>
            <p> Something something something</p>
            <p>Something something something</p>
          </div>
          <hr/>
          <div className='row'>
            <h3 className='col-sm-9'>Reviews</h3>
            <button className='col-sm-3'>Add new review</button>
          </div>
          
        </div>
      </div>
    </div>
  )
}