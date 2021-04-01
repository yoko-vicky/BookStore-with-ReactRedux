import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeBook } from '../actions/index';

const Book = ({
  id, title, category, removeBook,
}) => (
  <tr>
    <td>{id}</td>
    <td>{title}</td>
    <td>{category}</td>
    <td>
      <button
        type="button"
        onClick={() => {
          removeBook(id);
        }}
      >
        Remove
      </button>
    </td>
  </tr>
);

Book.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  removeBook: PropTypes.func,
};

Book.defaultProps = {
  id: null,
  title: '',
  category: '',
  removeBook: null,
};

const mapDispatchToProps = (dispatch) => ({
  removeBook: (id) => dispatch(removeBook({ id })),
});

export default connect(undefined, mapDispatchToProps)(Book);
