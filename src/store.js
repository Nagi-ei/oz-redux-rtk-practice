import { combineReducers, legacy_createStore } from 'redux';
import { menuReducer } from './reducers/menuReducer';
import { cartReducer } from './reducers/cartReducer';

const rootReducer = combineReducers({ menuReducer, cartReducer });

export const store = legacy_createStore(rootReducer);
