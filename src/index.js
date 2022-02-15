import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Router as Router } from "react-router-dom";
import { createMemoryHistory /* , createBrowserHistory */ } from 'history';
import "./css/fonts.css";
import "./css/bootstrap.min.css";

import "./css/style.css"

const history = createMemoryHistory();
ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

