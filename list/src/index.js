import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { logUser } from './actions';
import Routes from './routes'
import { firebaseApp } from './firebase';
import reducer from './reducers';

import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

const store = createStore(reducer);

/*firebaseApp.auth().onAuthStateChanged(user => {
    if(user) {
        const { email } = user;
        store.dispatch(logUser(email));
        browserHistory.push('/app')
    } else {
        browserHistory.replace('/signin');
    }
})*/

ReactDOM.render(
    <Provider store={store}>
        <Routes />
   </Provider>, document.getElementById('root') 
)