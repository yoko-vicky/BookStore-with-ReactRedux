import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './reducers/index';
import AppRouter from './routers/AppRouter';
import './assets/styles/style.scss';
import { createBook } from './actions/index';
import categories from './utilities/categories';
import renderCharts from './vendors/charts';

const store = configureStore();

store.dispatch(createBook({ title: 'The Hunger Games', category: categories[0] }));
store.dispatch(createBook({ title: 'Dune', category: categories[1] }));
store.dispatch(createBook({ title: 'Capital in the Twenty-First Century', category: categories[2] }));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

store.subscribe(() => {
  setTimeout(() => {
    renderCharts();
  }, 1);
});

ReactDOM.render(jsx, document.getElementById('root'));
renderCharts();
