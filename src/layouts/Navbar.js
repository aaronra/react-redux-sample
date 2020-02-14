import React from 'react';
import {
  NavLink,
  withRouter,
} from 'react-router-dom';

const Navbar = (props) => {
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <span className="brand-logo">
          CRUD
        </span>
        <ul className="right">
          <li>
            <NavLink to="/">Home</NavLink></li>
          <li>
            <NavLink to="/add">Add User</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
