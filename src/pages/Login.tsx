import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login__logo"
                    src="https://germainmaureau.com/app/uploads/2020/05/Amazon-logo.png"
                    alt="" />
            </Link>

            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" />
                    <h5>Password</h5>
                    <input type="text" />
                    <button>Sign In</button>
                </form>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                <button>Create your Amazon Account</button>
            </div>
        </div>
    );
};

export default Login;
