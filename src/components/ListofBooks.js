import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v1 as uuidv1 } from 'uuid';
import EachBook from './EachBook';
import {
  fetchBook, postBook, newTitle, newAuthor,
} from '../redux/books/booksSlice';

function ListofBooks() {
  const {
    bookItems, isLoading, error, title, author, count,
  } = useSelector((store) => store.books);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const addBook = {
      item_id: uuidv1(),
      category: 'Action',
      title,
      author,
    };

    dispatch(postBook(addBook));
  };

  useEffect(() => {
    dispatch(fetchBook());
  }, [dispatch, count]);

  const booksLoading = isLoading && <p>Books Loading...</p>;
  const errorMsg = error && <p>Oops! Something went wrong. Reload your page</p>;

  return (
    <>
      <div className="books-list flex">
        {booksLoading}
        {errorMsg}
        <>
          {Object.keys(bookItems).length === 0
          && !{ booksLoading }}

          {Object.keys(bookItems).map((key) => {
            const book = bookItems[key][0];
            return (
              <EachBook
                key={key}
                book={book}
                id={key}
              />
            );
          })}
        </>
      </div>

      <div className="flex input-form">
        <h1 className="Title grey" id="montserrat">ADD NEW BOOK</h1>
        <form className="flex" onSubmit={handleSubmit}>
          <input className="input-title" id="montserrat" value={title} type="text" name="title" placeholder="Book title" onChange={(e) => dispatch(newTitle(e.target.value))} required />
          <input className="input-author" id="montserrat" value={author} type="text" name="author" placeholder="Author" onChange={(e) => dispatch(newAuthor(e.target.value))} required />
          <select className="category-option" name="text" placeholder="Category">
            <option value="category" id="montserrat"> Category </option>
          </select>
          <button className="blue-buttons add-button" id="roboto" type="button" onClick={handleSubmit}>ADD BOOK</button>
        </form>
      </div>

    </>
  );
}

export default ListofBooks;
