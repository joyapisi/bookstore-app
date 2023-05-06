function Books() {
  return (
    <>
      <article className="whole-body">
        <div className="outer-container">
          <div className="inner-container">
            <p>Action</p>
            <h2>The Hunger Games</h2>
            <p>Susan Collins</p>
            <div className="buttons1">
              <button type="button">Comments</button>
              <button type="button">Remove</button>
              <button type="button">Edit</button>
            </div>
          </div>

          <div className="bookmark">
            <svg className="bookmark-progress" xmlns="http://www.w3.org/2000/svg">
              <circle
                className="bookmark-progress-gray"
                cx="111"
                cy="100"
                r="44"
              />
              <circle
                className="bookmark-progress-blue"
                cx="111"
                cy="100"
                r="44"
              />
            </svg>
            <div className="percentage-complete">
              <h1 className="percent">64%</h1>
              <p className="state">Completed</p>
            </div>

          </div>

          <div className="inner-container">
            <p>CURRENT CHAPTER</p>
            <p>Chapter 17</p>
            <button type="button">UPDATE PROGRESS</button>
          </div>

        </div>
        <div className="input-form">
          <div className="inner-form">
            <h1>ADD NEW BOOK</h1>
            <input type="text" name="text" placeholder="Book title" />
            <select name="text" placeholder="Category">
              <option value="category"> Category </option>
            </select>
            <button id="Add Button" type="button">ADD BOOK</button>
          </div>
        </div>
      </article>
    </>
  );
}

export default Books;
