import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './reducers/index';
import App from './components/App';
import './styles/style.scss';
import { createBook } from './actions/index';

const store = configureStore();

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
store.dispatch(createBook({ title: 'Find Nimo!', category: categories[4] }));
store.dispatch(createBook({ title: 'My Biography', category: categories[1] }));
store.dispatch(createBook({ title: 'My Learning', category: categories[5] }));

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
