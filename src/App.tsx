import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import HomeScreen from './/js/components/Home';
import { Route, Switch } from 'react-router';

const App = (
  <div className="App">
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default () => {
  return App;
};
