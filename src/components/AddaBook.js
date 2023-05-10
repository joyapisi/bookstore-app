import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addBook } from '../redux/books/booksSlice';

function AddaBook() {
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
  );
}

export default AddaBook;
