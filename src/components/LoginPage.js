import React from 'react';
import { connect} from "react-redux";
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
    <div className='box-layout'>
        <div className='box-layout__box'>
            <h1 className='box-layout__title'>My Blog App</h1>
            <p>Get ready create and post your own blogs</p>
            <button onClick={startLogin} className='button'>Login with Google</button>
            {/* <button onClick={startLogin} className='button button-fb'>Login with Facebook</button> */}
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);

