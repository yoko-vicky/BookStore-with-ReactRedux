import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';
import getVisibleBooks from '../selectors/books';

class BooksList extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange = (e) => {
    const { changeFilter } = this.props;
    const filter = e.target.value;
    changeFilter(filter);
  }

  handleRemoveBook = (id) => {
    const { removeBook, changeFilter } = this.props;
    removeBook(id);
    changeFilter('All');
  }

  render() {
    const { books, filter } = this.props;
    return (
      <div className="books">
        <CategoryFilter handleFilterChange={this.handleFilterChange} filter={filter} />
        {books.map((book) => (
          <Book
            id={book.id}
            title={book.title}
            category={book.category}
            key={book.id}
            handleRemoveBook={this.handleRemoveBook}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  books: getVisibleBooks(state.books, state.filter),
  filter: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  removeBook: (id) => dispatch(removeBook({ id })),
  changeFilter: (filter) => dispatch(changeFilter(filter)),
});

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.instanceOf(Object)),
  filter: PropTypes.string,
  removeBook: PropTypes.func,
  changeFilter: PropTypes.func,
};

BooksList.defaultProps = {
  books: [],
  filter: 'All',
  removeBook: null,
  changeFilter: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
