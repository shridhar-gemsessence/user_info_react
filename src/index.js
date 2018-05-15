import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { Link } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import 'bootstrap/dist/css/bootstrap.css';

import store, { history } from './configureStore';
import registerServiceWorker from './registerServiceWorker';

import AppRoutes from './AppRoutes';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <AppRoutes />
    </ConnectedRouter>
  </Provider>
  , document.getElementById('root')
);
registerServiceWorker();
