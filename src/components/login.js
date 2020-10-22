import React from 'react';
import { Link } from 'react-router-dom';
import App from '../App';
import '../App.css';

function Login() {
    return(
        <div>
            <h2>Login</h2>
            <input type="text" placeholder="username"/>
            <input type="password" placeholder="password"/>
            <Link to="/sign-up">Sign up</Link>
        </div>
    )
} 

export default Login;