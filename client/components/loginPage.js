import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { withRouter } from 'react-router-dom';
import Header from './header.js';

class LoginPage extends Component {
  state = {
    error: false,
    errorMes: ''
  }

  onLoginClick = (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if(!Meteor.userId()) {

      Meteor.loginWithPassword(email, password, (err) => {
        const userId = Meteor.userId();
        if (err) {
          this.setState({error: true, errorMes: err.reason});
          this.getOffError();
        } else {
          this.props.history.push(`/LoginPage/${userId}`)
        }
      })
    }else{
      this.setState({ error: true, errorMes: "Please fill out all fields properly or Log out from other account" });
      this.getOffError();
    }
  }

  getOffError = () => {
    setTimeout(() => {
      this.setState({ error: false, errorMes: '' })
    }, 3000)
  }

  render() {
    let errorMessage = '';

    if (this.state.error) {
      errorMessage = <div className="alert alert-danger">{this.state.errorMes}</div>
    }

    return (
        <React.Fragment>
          <Header/>
          <div className="login-container">
            <h4>Login</h4>
            <br />
            <div className="input-group">
              <label htmlFor="name">Username or Email</label>
              <input type="text" id="email" placeholder="Username or Email" className="form-control" />
            </div>
            <div className="input-group">
              <label htmlFor="name">Password</label>
              <input type="password" id="password" placeholder="Password" className="form-control" />
            </div>
            <button className="btn btn-success myBtn" onClick={this.onLoginClick}>Sign in</button>
            {errorMessage}
          </div>
        </React.Fragment>
    )
  }
}

export default withRouter(LoginPage);