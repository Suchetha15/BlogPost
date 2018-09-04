import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = (props) => {
  console.log(props);
  return (
  <header className='header'>
    <div className="content-container">
      <div className="header__content">
        <Link className='header__title' to="/dashboard">
          <h1>My Blog App</h1>
        </Link>
        <div className="header__user">
          <p>Logged in, {props.auth.userName}<span><img src={props.auth.userImg} /></span></p>
          <button className="button button-logout" onClick={props.startLogout}>Logout</button>
        </div>
      </div>
    </div>
  </header>
);
}

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});
const mapStateToProps = (state) => ({
  auth: state.auth 
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);