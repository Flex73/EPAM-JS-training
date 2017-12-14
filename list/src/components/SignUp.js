import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { firebaseApp } from '../firebase';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: {
                message: ''
            }
        }
    }

    signUp() {
        const { email, password } = this.state;
        firebaseApp.auth().createUserWithEmailAndPassword(email, password)
            .catch(error => {
                this.setState({error});
            })
    }

    render() {
        return(
          <div className="form-inline">
              <h2>SignUp</h2>
              <form className="form-group">
                <input 
                    className="form-control"
                    type="text"
                    placeholder="email"
                    onChange={event => this.setState({email: event.target.value})} />
                <input 
                    className="form-control"
                    type="password"
                    placeholder="password"
                    onChange={event => this.setState({password: event.target.value})}/>
                <button 
                    className="form-button"
                    type="button"
                    onClick={this.signUp()}>
                        Sign Up
                </button>
              </form>
              <span>{this.state.error.message}</span>
              <span><Link to={'/signin'}>Sign In</Link></span>
          </div> 
        )
    }
}

export default SignUp;