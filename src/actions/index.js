import { v4 as uuid } from 'uuid';

export const createBook = ({
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
