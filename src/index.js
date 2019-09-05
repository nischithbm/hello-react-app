import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './index.css';
import App from './App';
import Dashboard from './dashboard';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
        <Route path="/" exact component={App} />
        <Route path="/dashboard/" component={Dashboard} />
    </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
