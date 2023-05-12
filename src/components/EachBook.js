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
          <span className="School-of">category</span>
          <span className="Title book-title">{book.title}</span>
          <span className="author">{book.author}</span>
          <div className="margin-buttons buttons">
            <button type="button">Comments</button>
            <span className="grey divider"> | </span>
            <button type="button" onClick={() => { dispatch(removeBook(id)); }}>Remove</button>
            <span className="grey divider"> | </span>
            <button type="button">Edit</button>
          </div>
        </div>

        <div className="box bookmark">
          <div className="oval" />
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
