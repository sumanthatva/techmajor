export default function NewReview() {

  return (
    <form>
      <div>
        <label>Rating</label>
        <input type="number" min="1.0" step="0.1" max="5.0"/>
      </div>
      <div>
        <label>Review</label>
        <input type="text"/>
      </div>
      <div>
        <button type="submit">Add review</button>
      </div>
    </form>
  )
}