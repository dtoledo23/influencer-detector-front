import React from 'react';
import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'
import App from './App';

// routes
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import SearchResult from './pages/SearchResult';

export default (
  <Router history={createBrowserHistory()} >
    <App> 
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/search' component={SearchResult} />
        <Route component={NotFound}/>
      </Switch>
    </App>
  </Router>
);