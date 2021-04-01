import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../actions/index';

const BooksList = ({ books, removeBook }) => (
  <div>
    <table>
      <thead>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <Book
            id={book.id}
            title={book.title}
            category={book.category}
            key={book.id}
            handleRemoveBook={(id) => { removeBook(id); }}
          />
        ))}
      </tbody>
    </table>
  </div>
);

const mapStateToProps = (state) => ({
  books: state.books,
});

const mapDispatchToProps = (dispatch) => ({
  removeBook: (id) => dispatch(removeBook({ id })),
});

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.instanceOf(Object)),
  removeBook: PropTypes.func,
};

BooksList.defaultProps = {
  books: [],
  removeBook: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
