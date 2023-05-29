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
        <div className="box flex each-book">
          <span className="category" id="montserrat">category</span>
          <span className="Title book-title" id="roboto">{book.title}</span>
          <span className="author" id="roboto">{book.author}</span>
          <div className="flex buttons">
            <button type="button">Comments</button>
            <span className="grey divider"> | </span>
            <button type="button" onClick={() => { dispatch(removeBook(id)); }}>Remove</button>
            <span className="grey divider"> | </span>
            <button type="button">Edit</button>
          </div>
        </div>

        <div className="box bookmark">

          <svg viewBox="0 0 36 36" className="circular-chart blue">
            <path
              className="circle-bg"
              strokeDasharray="60, 100"
              d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="circle"
              strokeDasharray="90, 100"
              d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>

          <div className="percentage-complete" id="montserrat">
            <h2 className="percent">90%</h2>
            <p className="state">Completed</p>
          </div>
        </div>

        <div className="box flex current-chapter">
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
