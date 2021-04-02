import React from 'react';
import PropTypes from 'prop-types';

const Book = ({
  id, title, category, handleRemoveBook,
}) => (
  <div className="book">
    <div className="book__left">
      <div className="book__cat">{category}</div>
      <h2 className="book__title">{title}</h2>
      <div className="book__author">Author Name</div>
      <div className="book__actions">
        <button type="button" className="book__actions__btn">Comments</button>
        <button
          type="button"
          className="book__actions__btn"
          onClick={() => {
            handleRemoveBook(id);
          }}
        >
          Remove
        </button>
        <button type="button" className="book__actions__btn">Edit</button>
      </div>
    </div>
    <div className="book__middle book__chart">
      <div className="book__chart__graph">Graph</div>
      <div className="book__chart__text">
        <div className="book__chart__percent">64%</div>
        <div className="book__chart__completed">completed</div>
      </div>
    </div>
    <div className="book__right">
      <div className="book__current__title">Current Chapter</div>
      <div className="book__current__chapter">Chapter 3: A Lesson Learned</div>
      <button type="button" className="blue-btn">Update progress</button>
    </div>
  </div>
);

Book.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  handleRemoveBook: PropTypes.func,
};

Book.defaultProps = {
  id: null,
  title: '',
  category: '',
  handleRemoveBook: null,
};

export default Book;
