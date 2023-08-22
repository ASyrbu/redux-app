import { combineReducers } from '@reduxjs/toolkit';
import { store1 } from './store1';
import { store } from './services/index';

const rootReducer = combineReducers({
    crypto: store1,
    pagination: store,
});

export default rootReducer;