import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

function EachBook({
  book, id,
}) {
  const dispatch = useDispatch();

  return (
    <>
      <section className="inner-container">
        <div id="box each-book">
          <p className="grey">category</p>
          <h2>{book.title}</h2>
          <p className="author">{book.author}</p>
          <div className="margin-buttons buttons">
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
          <h5 className="grey">CURRENT CHAPTER</h5>
          <h5>Chapter 17</h5>
          <button className="margin-buttons" type="button">UPDATE PROGRESS</button>
        </div>

      </section>
    </>
  );
}
EachBook.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  book: PropTypes.string.isRequired,
};

export default EachBook;
