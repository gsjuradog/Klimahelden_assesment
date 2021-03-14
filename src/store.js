import { createStore, applyMiddleware, compose } from 'redux';
import {rootReducer, initialState} from './reducers';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, initialState,composeEnhancers(
    applyMiddleware(...middleware)
));

export default store;