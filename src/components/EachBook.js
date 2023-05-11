import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

function EachBook({
  title, author, category, id,
}) {
  const dispatch = useDispatch();
  return (
    <>
      <div className="inner-container">
        <p>{category}</p>
        <h2>{title}</h2>
        <p>{author}</p>
        <div className="buttons">
          <button type="button">Comments</button>
          <button type="button" onClick={() => dispatch(removeBook(id))}>Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>
    </>
  );
}
EachBook.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default EachBook;
