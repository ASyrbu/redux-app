import React from "react";
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from './store/services/index'
import { store1 } from './store/store1'
import App from './App'
import 'antd/dist/antd'
import './firebase'

ReactDOM.render(<Router>
    <Provider store={store}>
        <Provider store={store1}>
            <App />
        </Provider>
    </Provider>
</Router>
    , document.getElementById('root'));