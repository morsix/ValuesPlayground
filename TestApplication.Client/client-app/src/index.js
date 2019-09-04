import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import axios from 'axios';

const rootReducer = combineReducers({
    tr: testReducer,
})

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

axios.defaults.baseURL = 'https://localhost:44384';

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App></App>
        </BrowserRouter>
        </Provider>
);


ReactDOM.render(app, document.getElementById('root'));
