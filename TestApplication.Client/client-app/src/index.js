import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import axios from 'axios';

axios.defaults.baseURL = 'https://localhost:44384';

const app = (
        <BrowserRouter>
            <App></App>
        </BrowserRouter>
);


ReactDOM.render(app, document.getElementById('root'));
