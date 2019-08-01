import React, { Fragment } from "react";
import logo from "../../img/ro-fitness-logo.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

const Nvbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <Link onClick={logout} to='#!'>
          {" "}
          <i className='fas fa-sign-out-alt' />{" "}
          <span className='hide-sm'> Logout </span>
        </Link>
        {/* <Link to='/register'> Register </Link> */}
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to='/register'> Register </Link>
      </li>
      <li>
        <Link to='/login'> Login </Link>
      </li>
    </ul>
  );

  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='index.html'>
          <i className='fas fa-water' /> Rō Fitness
        </Link>
      </h1>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

Nvbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Nvbar);
