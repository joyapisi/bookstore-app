import { useState, React } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import EachBook from './EachBook';
import { addBook } from '../redux/books/booksSlice';

function ListofBooks() {
  const { bookItems } = useSelector((store) => store.books);

  const [values, setValue] = useState({});
  const dispatch = useDispatch();

  function handleChange(e) {
    const { name } = e.target;
    const { value } = e.target;
    setValue((values) => ({
      ...values, item_id: crypto.randomUUID(), [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addBook(values));
    setValue({});
  }

  return (
    <>
      <div className="outer-container">

        <div id="books-list">
          {bookItems.map((book) => (
            <EachBook
              key={book.item_id}
              title={book.title}
              author={book.author}
              category={book.category}
              id={book.item_id}
            />
          ))}
        </div>

        {/* <div className="bookmark">
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

      </div> */}

      <div className="input-form">
        <h1>ADD NEW BOOK</h1>
        <form>
          <input value={values.title || ''} type="text" name="title" placeholder="Book title" onChange={handleChange} />
          <input value={values.author || ''} type="text" name="author" placeholder="Book author" onChange={handleChange} />
          <select name="text" placeholder="Category">
            <option value="category"> Category </option>
          </select>
          <button id="Add Button" type="button" onClick={handleSubmit}>ADD BOOK</button>
        </form>
      </div>
    </>
  );
}

export default ListofBooks;


{/* return (
    <>
      <div className="outer-container">

        <div id="books-list">
          {bookItems.map((book) => (
            <EachBook
              key={book.item_id}
              title={book.title}
              author={book.author}
              category={book.category}
              id={book.item_id}
            />
          ))}
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
        <h1>ADD NEW BOOK</h1>
        <form>
          <input value={values.title || ''} type="text" name="title" placeholder="Book title" onChange={handleChange} />
          <input value={values.author || ''} type="text" name="author" placeholder="Book author" onChange={handleChange} />
          <select name="text" placeholder="Category">
            <option value="category"> Category </option>
          </select>
          <button id="Add Button" type="button" onClick={handleSubmit}>ADD BOOK</button>
        </form>
      </div>
    </>
  ); */}
