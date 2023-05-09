function EachBook({ bookItems }) {
  <div className="inner-container">
    <p>{bookItems.category}</p>
    <h2>{bookItems.title}</h2>
    <p>{bookItems.author}</p>
    <div className="buttons1">
      <button type="button">Comments</button>
      <button type="button">Remove</button>
      <button type="button">Edit</button>
    </div>
  </div>;
}

export default EachBook;
