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
        <div className="box each-book">
          <span className="category" id="montserrat">category</span>
          <span className="Title book-title" id="roboto">{book.title}</span>
          <span className="author" id="roboto">{book.author}</span>
          <div className="buttons">
            <button type="button">Comments</button>
            <span className="grey divider"> | </span>
            <button type="button" onClick={() => { dispatch(removeBook(id)); }}>Remove</button>
            <span className="grey divider"> | </span>
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
          <div className="percentage-complete" id="montserrat">
            <h2 className="percent">64%</h2>
            <p className="state">Completed</p>
          </div>
        </div>

        <div className="box current-chapter">
          <h5 className="grey" id="roboto">CURRENT CHAPTER</h5>
          <h5 className="chapter" id="roboto">Chapter 17</h5>
          <button className="blue-buttons progress-btn" id="roboto" type="button">UPDATE PROGRESS</button>
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
