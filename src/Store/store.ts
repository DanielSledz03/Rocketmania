import { applyMiddleware, legacy_createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './Reducers';

export const store = legacy_createStore(reducers, applyMiddleware(thunk));
