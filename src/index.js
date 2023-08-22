import React from "react";
import { configureStore } from '@reduxjs/toolkit';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store1 } from './store/store1'
import App from './App'
import 'antd/dist/antd'
import './firebase'



ReactDOM.render(<Router>
    <Provider store={store1}>
        <App />
    </Provider>
</Router>
    , document.getElementById('root'));