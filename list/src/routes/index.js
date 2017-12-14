import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import App from '../components/App';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

export default () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={App} />
            <Route path="/app" exact component={App} />
            <Route path="/signin" exact component={SignIn} />
            <Route path="/signup" exact component={SignUp} />
        </Switch>
    </BrowserRouter>
)