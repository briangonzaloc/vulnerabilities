import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga'
import { createBrowserHistory } from 'history'
import { all } from 'redux-saga/effects'

/*** Reducers ***/
import reducers from '../reducers/index'
/*** Sagas ***/
import repositories from '../sagas/index' 

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  reducers,
  router: connectRouter(history)
});

const middlewares = [routerMiddleware(history),sagaMiddleware];

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line

export const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(...middlewares))
)

export default function* rootSagas() {
	yield all([
    repositories(),
	])
} 

sagaMiddleware.run(rootSagas)