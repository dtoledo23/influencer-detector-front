import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './Routes';
import store from './stores/storeApp';

ReactDOM.render(
  <Provider store={store}>
    <div style={{ height: '100%' }}>
      { Routes }
    </div>
  </Provider>, document.getElementById('root'));
  