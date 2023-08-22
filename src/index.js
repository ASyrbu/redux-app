import React from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store1 } from './store/store1'
import App from './App'
import 'antd/dist/antd'
import './firebase'

createRoot(document.getElementById('root')).render(
    <Provider store={store1}>
        <Router>
            <App />
        </Router>
    </Provider>
);