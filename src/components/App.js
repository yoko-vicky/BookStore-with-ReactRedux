import React from 'react';
import BooksList from './BooksList';
import BooksForm from './BooksForm';

const App = () => (
  <div>
    <h1>Book Store</h1>
    <BooksList />
    <BooksForm />
  </div>
);

export default App;
