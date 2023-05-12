import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

function EachBook({ title, author, id }) {
  const dispatch = useDispatch();

  return (
    <>
      <section className="box inner-container">
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

        <div className="box bookmark">
          <svg
            className="bookmark-progress"
            xmlns="http://www.w3.org/2000/svg"
          >
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

        <div className="box current-chapter">
          <p>CURRENT CHAPTER</p>
          <p>Chapter 17</p>
          <button type="button">UPDATE PROGRESS</button>
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
