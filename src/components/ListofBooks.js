import React from 'react';
import { useSelector } from 'react-redux';
import EachBook from './EachBook';

function ListofBooks() {
  const { bookItems } = useSelector((store) => store.books);

  return (
    <>

      <div className="outer-container">
        {bookItems.map((book) => (
          <EachBook
            key={book.item_id}
            title={book.title}
            author={book.author}
            category={book.category}
            id={book.item_id}
          />
        ))}
      </div>

      <div className="bookmark">
        <svg className="bookmark-progress" xmlns="http://www.w3.org/2000/svg">
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

      <div className="inner-container">
        <p>CURRENT CHAPTER</p>
        <p>Chapter 17</p>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </>
  );
}

export default ListofBooks;
