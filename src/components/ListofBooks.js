import { useState, useEffect, React } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import EachBook from './EachBook';
import { fetchBooks } from '../redux/books/booksSlice';

function ListofBooks() {
  const { bookItems, isLoading, error } = useSelector((store) => store.books);

  const [values, setValue] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch, error]);

  const booksLoading = isLoading && <p>Books Loading...</p>;
  const errorMsg = error && <p>Oops! Something went wrong. Reload your page</p>;

  function handleChange(e) {
    const { name } = e.target;
    const { value } = e.target;
    setValue((values) => ({
      ...values, item_id: crypto.randomUUID(), [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(fetchBooks(values));
    setValue({});
  }

  return (
    <>
      {booksLoading}
      {errorMsg}
      <div className="books-list">
        {bookItems.map((book) => (
          <>
            <EachBook
              key={book.item_id}
              title={book.title}
              author={book.author}
              id={book.item_id}
            />
          </>
        ))}
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
  );
}

export default ListofBooks;
