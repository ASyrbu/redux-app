import React from "react";
import { configureStore } from '@reduxjs/toolkit';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from './store/services/index'
import rootReducer from "./store/rootReducer";
import { store1 } from './store/store1'
import App from './App'
import 'antd/dist/antd'
import './firebase'

const store3 = configureStore({
    reducer: rootReducer,
});


ReactDOM.render(<Router>
    <Provider store={store}>
        <App />
    </Provider>
</Router>
    , document.getElementById('root'));