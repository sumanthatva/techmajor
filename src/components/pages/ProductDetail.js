import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import NewReview from '../NewReview';

export default function ProductDetail() {
  const params = useParams();
  console.log(params.productId);

  // State to track new review form render
  const [isShowNewReview, setIsShowNewReview] = useState(false);

  // state to track the reviews added.
  const [reviews, setReviews] = useState([]);

  // function to toggle new review view
  const toggleNewReview = () => {
    setIsShowNewReview((prevState) => {
      return !prevState;
    })
  }

  const addNewReview = (newReviewObj) => {
    // Add new review to the array in the state
    setReviews((prevState) => {
      return [...prevState, newReviewObj];
    });
    console.log("add New review called");
  }

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
            <h3 className='col-sm-9'>Reviews ({reviews.length}) </h3>
            <button className='col-sm-3' onClick={toggleNewReview}>Add new review</button>
          </div>
          <div className='row'>
            <div className='col-sm-12'>
            {isShowNewReview &&
                <div className='row'>
                  <NewReview onAddReview={addNewReview}/>
                </div> 
            }
            </div>
            
          </div>
          
          <div className='row'>
            <div className='col-sm-12'>
              {
              reviews.length > 0 &&
                <div className='reviews-div' id="review_div">
                { reviews.map((review) => {
                  return (
                    <div>
                      <div>{review.rating}</div>
                      <div> {review.review}</div>
                    </div>
                  )
                }) }
                </div>
              }
            </div>
          
          </div>
        </div>
      </div>
    </div>
  )
}