import { useState } from "react";

export default function NewReview() {
  const [rating, setRating] = useState('1.0');
  const [review, setReview] = useState("");

  const ratingsChangeHandler = (event) => {
    console.log("ratingsChangeHandler: " + event.target.value);
    setRating(event.target.value);
  }

  const reviewChangeHandler = (event) => {
    console.log("reviewChangeHandler: " + event.target.value);
    setReview(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("NewReview::Submit clicked");
    console.log("Rating: " + rating);
    console.log("Review: " + review);
  }

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Rating</label>
        <input type="number" min="1.0" step="0.1" max="5.0" 
              onChange={(event) => ratingsChangeHandler(event)}/>
      </div>
      <div>
        <label>Review</label>
        <input type="text" 
              onChange={(event) => reviewChangeHandler(event)}/>
      </div>
      <div>
        <button type="submit">Add review</button>
      </div>
    </form>
  )
}