const defaultBooksState = [];
const booksReducer = (state = defaultBooksState, action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [
        ...state,
        action.book,
      ];
    case 'REMOVE_BOOK':
      return state.filter((book) => book.id !== action.id);
    case 'EDIT_BOOK':
      return state.map((book) => (book.id === state.id ? { ...book, ...state.book } : book));
    default:
      return state;
  }
};
export default booksReducer;
