import React from 'react';
import PropTypes from 'prop-types';
import categories from '../utilities/categories';

const filterCategories = ['All', ...categories];
const CategoryFilter = ({ handleFilterChange, filter }) => (
  <select
    value={filter}
    onChange={handleFilterChange}
    name="categoryFilter"
  >
    {filterCategories.map((cat) => <option value={cat} key={cat}>{cat}</option>)}
  </select>
);

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func,
  filter: PropTypes.string,
};

CategoryFilter.defaultProps = {
  handleFilterChange: null,
  filter: 'All',
};

export default CategoryFilter;
