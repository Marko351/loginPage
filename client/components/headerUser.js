import React from 'react';
import {Link} from 'react-router-dom';

const HeaderUser = (props) => {
    onLogOut = () => {
      Meteor.logout((err) => {
        console.log(err);
      })
    }

    return(
      <nav className="navbar navbar-inverse">
        <div className="navbar-header">
          <a href="#" className="navbar-brand">LoginPage</a>
        </div>
        <div>
          <ul className="nav navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={this.onLogOut}>
                Log out
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/LoginPage/change-password" className="nav-link">
                ChangePassword
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
}

export default HeaderUser;