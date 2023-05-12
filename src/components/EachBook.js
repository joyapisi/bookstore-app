import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

function EachBook({ title, author, id }) {
  const dispatch = useDispatch();

  return (
    <>
      <section className="inner-container">
        <div id="each-book">
          <p>category</p>
          <h2>{title}</h2>
          <p>{author}</p>
          <div className="buttons">
            <button type="button">Comments</button>
            <button type="button" onClick={() => { dispatch(removeBook(id)); }}>Remove</button>
            <button type="button">Edit</button>
          </div>
        </div>
        <div>
          part2
        </div>
        <div>
          part3
        </div>
      </section>
    </>
  );
}
EachBook.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default EachBook;
