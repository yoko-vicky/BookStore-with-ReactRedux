import { v4 as uuid } from 'uuid';

export const addBook = ({
  title = '',
  category = '',
} = {}) => ({
  type: 'CREATE_BOOK',
  book: {
    id: uuid(),
    title,
    category,
  },
});

export const removeBook = ({ id }) => ({
  type: 'REMOVE_BOOK',
  id,
});

export const editBook = (id, book = {}) => ({
  type: 'EDIT_BOOK',
  id,
  book,
});
