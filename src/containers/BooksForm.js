import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addBook } from '../actions/index';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      title: '',
      category: 'Action',
    };
  }

  onTitleChange = (e) => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  }

  onCategoryChange = (e) => {
    const category = e.target.value;
    this.setState(() => ({ category }));
  }

  onSubmit = (e) => {
    const {
      id, title, category,
    } = this.state;
    const { addBook } = this.props;
    e.preventDefault();
    addBook({
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
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            value={title}
            placeholder="Title"
            onChange={this.onTitleChange}
          />
          <select value={category} onChange={this.onCategoryChange}>
            {categories.map((cat) => <option value={cat} key={cat}>{cat}</option>)}
          </select>
          <button type="submit">Save Book</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addBook: (book) => dispatch(addBook(book)),
});

BooksForm.propTypes = {
  addBook: PropTypes.func,
};

BooksForm.defaultProps = {
  addBook: null,
};

export default connect(undefined, mapDispatchToProps)(BooksForm);
