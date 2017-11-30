import React, {Component} from 'react';
import {browserHistory, Router, Route} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import store from './../store';

import withAuth from './../wrappers/Auth/Auth';

import LoginComponent from './Login/Login';
const LoginWithAuth = withAuth(LoginComponent);

const history = syncHistoryWithStore(browserHistory, store);

class App extends Component{
    render(){
        return (
                <Router history={history}>
                    <Route path="/" component={LoginWithAuth}/>
                </Router>
            );
    }
}

export default App;
