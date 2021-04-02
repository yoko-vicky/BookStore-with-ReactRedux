import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions/index';
import categories from '../utilities/categories';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      title: '',
      category: 'Action',
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState(() => ({ [name]: value }));
  }

  handleSubmit = (e) => {
    const {
      id, title, category,
    } = this.state;
    const { createBook } = this.props;
    e.preventDefault();
    createBook({
      id,
      title: title.trim(),
      category,
    });
    this.setState(() => ({
      title: '',
      category: '',
    }));
  }

  render() {
    const { title, category } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={title}
            name="title"
            placeholder="Title"
            onChange={this.handleChange}
          />
          <select
            value={category}
            onChange={this.handleChange}
            name="category"
          >
            {categories.map((cat) => <option value={cat} key={cat}>{cat}</option>)}
          </select>
          <button type="submit">Save Book</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  createBook: (book) => dispatch(createBook(book)),
});

BooksForm.propTypes = {
  createBook: PropTypes.func,
};

BooksForm.defaultProps = {
  createBook: null,
};

export default connect(undefined, mapDispatchToProps)(BooksForm);
