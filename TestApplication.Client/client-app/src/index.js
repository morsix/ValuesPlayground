import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import axios from 'axios';

axios.defaults.baseURL = 'https://localhost:44384';

ReactDOM.render(<App />, document.getElementById('root'));
