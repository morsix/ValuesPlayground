import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import vehicleReducer from './store/reducers/vehicle';

const appSettings = require('./clientappsettings');

const rootReducer = combineReducers({
    vehicle: vehicleReducer,
})

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

axios.defaults.baseURL = appSettings.API_URL;

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App></App>
        </BrowserRouter>
        </Provider>
);


ReactDOM.render(app, document.getElementById('root'));
