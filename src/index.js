import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './index.css';
import App from './App';

import store from './store';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <Router basename="/">
            <Switch>
                <Route path="/:filter?" component={App}></Route>
            </Switch>
        </Router>
    </Provider>
    , document.getElementById('root')
);

registerServiceWorker();
