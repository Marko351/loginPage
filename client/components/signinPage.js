import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import Header from './header';
import {UserData} from '../../imports/collections/accounts';
import {withTracker} from 'meteor/react-meteor-data';

class SigninPage extends Component {
  constructor() {
    super();
    this.state = {
      error: false,
      errorMes: ''
    }
  }

  onError = (err) => {
    return <div className="alert alert-danger">{err.message}</div>;
  }

  onSignInClick = (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPasword = document.getElementById('confirm-password').value;

    if (password === confirmPasword && password !== '' && !Meteor.userId()) {
      const accouuntInfo = {
        username: name,
        email: email,
        password: password
      }

      Accounts.createUser(accouuntInfo, (err) => {
        const userId = Meteor.userId();
        if (err) {
          this.setState({ error: true, errorMes: err.reason });
          this.getOffError();
        } else {
          this.props.history.push(`/LoginPage/${userId}`);
        }
      })
    } else {
      this.setState({ error: true, errorMes: "Please fill out all fields properly or Log out from other account" });
      this.getOffError();
    }
    // console.log(accouuntInfo.email);
  }

  getOffError = () => {
    setTimeout(() => {
      this.setState({ error: false, errorMes: '' })
    }, 3000)
  }

  onFetchData = (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    // const id = Meteor.userId();

    Meteor.call('userData.insert', email);
    console.log(this.userId)
    console.log(this.props.data)
    Meteor.call('userData.name', this.props.data[2]._id, 'Idemo Maleni');
  }

  render() {
    let errorMessage = '';

    if (this.state.error) {
      errorMessage = <div className="alert alert-danger">{this.state.errorMes}</div>
    }

    return (
        <React.Fragment>
          <Header />
          <div className="signin-container">
            <h4>Register Account</h4>
            <br />
            <div className="input-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="name" className="form-control" />
            </div>
            <div className="input-group">
              <label htmlFor="name">Email</label>
              <input type="text" id="email" placeholder="email" className="form-control" />
            </div>
            <div className="input-group">
              <label htmlFor="name">Password</label>
              <input type="password" id="password" placeholder="password" className="form-control" />
            </div>
            <div className="input-group">
              <label htmlFor="name">Confirm Password</label>
              <input type="password" id="confirm-password" placeholder="confirm password" className="form-control" />
            </div>
            <button className="btn btn-success myBtn" onClick={this.onSignInClick}>Sign in</button>
            {errorMessage}
            <button onClick={this.onFetchData}>Fetch Data</button>
          </div>
        </React.Fragment>
    )
  }
}

export default withTracker((props) => {
  Meteor.subscribe('userData');

  return {data: UserData.find({}).fetch()}
})(withRouter(SigninPage));