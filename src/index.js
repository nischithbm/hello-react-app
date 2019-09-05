import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';

import App from './App';
import Dashboard from './dashboard';
import * as serviceWorker from './serviceWorker';
import './index.css';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route path="/" exact component={App} />
            <Route path="/dashboard/" component={Dashboard} />
        </Router>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
