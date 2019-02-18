import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-inverse">
      <div className="navbar-header">
        <a href="#" className="navbar-brand">LoginPage</a>
      </div>
      <div>
        <ul className="nav navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/LoginPage/register" className="nav-link">
              Sign in
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/LoginPage/login" className="nav-link">
              Log in
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header;