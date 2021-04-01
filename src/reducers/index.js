import { createStore, combineReducers } from 'redux';
import booksReducer from './books';

const configureStore = () => {
  const store = createStore(
    combineReducers({
      books: booksReducer,
    }),
  );
  return store;
};

export default configureStore;
