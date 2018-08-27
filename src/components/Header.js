import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = (props, { startLogout }) => {
  console.log(props);
  return (
  <header className='header'>
    <div className="content-container">
      <div className="header__content">
        <Link className='header__title' to="/dashboard">
          <h1>My Blog App</h1>
        </Link>
        <div>
          <p>Logged in, {props.auth.userName}</p>
          <button className="button button-logout" onClick={startLogout}>Logout</button>
        </div>
      </div>
    </div>
  </header>
);
}

const mapDispatchToProps = (state,dispatch) => ({
  startLogout: () => dispatch(startLogout()),
  auth: state.auth
});

export default connect(mapDispatchToProps)(Header);