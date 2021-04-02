import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../components/App';
import Header from '../components/Header';

const AppRouter = () => (
  <BrowserRouter>
    <div className="wrapper">
      <Header />
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
