import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './home';
import SigninPage from './signinPage';
import UserPage from './userPage';
import LoginPage from './loginPage';
import ChangePassword from './changePassword';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <div>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/LoginPage/register" component={SigninPage} />
                <Route exact path="/LoginPage/login" component={LoginPage} />
                <Route exact path="/LoginPage/change-password" component={ChangePassword} />
                <Route exact path="/LoginPage/:id" component={UserPage} />
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    )
  }
}

export default App;