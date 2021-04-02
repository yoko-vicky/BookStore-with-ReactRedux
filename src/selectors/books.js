const getVisibleBooks = (books, filter) => {
  if (filter === 'All') {
    return books;
  }
  return books.filter((book) => book.category === filter);
};
export default getVisibleBooks;
