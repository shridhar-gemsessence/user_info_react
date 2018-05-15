import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createHistory from 'history/createBrowserHistory';

import rootReducer from './reducers';

export const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(middleware)
  )
);

export default store;
