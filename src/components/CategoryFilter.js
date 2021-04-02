import React from 'react';
import PropTypes from 'prop-types';
import categories from '../utilities/categories';

const filterCategories = ['All', ...categories];
const CategoryFilter = ({ handleFilterChange, filter }) => (
  <div className="category-filter">
    <div className="category-filter__text">Filtered by</div>
    <select
      value={filter}
      onChange={handleFilterChange}
      name="categoryFilter"
      className="category-filter__select"
    >
      {filterCategories.map((cat) => <option value={cat} key={cat}>{cat}</option>)}
    </select>
  </div>
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
