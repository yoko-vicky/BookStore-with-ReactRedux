import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './reducers/index';
import App from './components/App';
import './styles/style.scss';
import { addBook } from './actions/index';

const store = configureStore();
store.subscribe(() => {
  const { books } = store.getState();
  // eslint-disable-next-line no-console
  console.log(books);
});

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
store.dispatch(addBook({ title: 'Find Nimo!', category: categories[4] }));
store.dispatch(addBook({ title: 'My Biography', category: categories[1] }));
store.dispatch(addBook({ title: 'My Learning', category: categories[5] }));

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
