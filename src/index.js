import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './Routes';
import store from './stores/storeApp';

ReactDOM.render(
  <Provider store={store}>
    <div>
      { Routes }
    </div>
  </Provider>, document.getElementById('root'));
  
  