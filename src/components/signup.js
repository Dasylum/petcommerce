import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function signup() {

    return(
        <div>
            <h2>Sign Up</h2>
            <input type="text" placeholder="username"/>
            <input type="password" placeholder="password"/>
            <Link to="/login">Login</Link>
        </div>
    )
} 

export default signup;