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
      <div className="books-list">
        {bookItems.map((book) => (
          <>
            <EachBook
              key={book.item_id}
              title={book.title}
              author={book.author}
              category={book.category}
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
