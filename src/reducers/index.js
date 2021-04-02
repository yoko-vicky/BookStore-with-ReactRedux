import { createStore, combineReducers } from 'redux';
import booksReducer from './books';
import filterReducer from './filter';

const configureStore = () => {
  const store = createStore(
    combineReducers({
      books: booksReducer,
      filter: filterReducer,
    }),
  );
  return store;
};

export default configureStore;
