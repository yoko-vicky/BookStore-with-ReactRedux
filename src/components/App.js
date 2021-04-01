import React from 'react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

const App = () => (
  <div>
    <h1>Book Store</h1>
    <BooksList />
    <BooksForm />
  </div>
);

export default App;
