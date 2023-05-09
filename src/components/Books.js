import { useSelector } from 'react-redux';
import EachBook from './EachBook';

function Books() {
  const { bookItems } = useSelector((store) => store.books.bookItems);

  return (
    <>
      <article className="whole-body">
        <div className="outer-container">
          {bookItems.map((book) => (<EachBook key={bookItems.id} book={book} />
          ))}
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
