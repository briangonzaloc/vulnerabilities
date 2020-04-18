import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga'
import { createBrowserHistory } from 'history'

/*** Reducers ***/
// import app                 from '../modules/app/AppReducer'

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
//   app,
  router: connectRouter(history)
});

const middlewares = [routerMiddleware(history),sagaMiddleware];

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line

export const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(...middlewares))
)