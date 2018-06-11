import React from 'react';
import PropTypes from 'prop-types';

const Login = (props) => (
    <nav className="login">
        <h2>Inventory Login</h2>
        <p>Sing in to manage your store's inventory.</p>
        <button className="github" onClick={() => props.auth('Github')}>
            Login with Github </button>
        <button className="facebook" onClick={() => props.auth('Facebook')}>
            Login with Facebook </button>
        <button className="twitter" onClick={() => props.auth('Twitter')}>
            Login with Twitter </button>
    </nav>
);

Login.propTypes = {
    auth: PropTypes.func.isRequired
};

export default Login;