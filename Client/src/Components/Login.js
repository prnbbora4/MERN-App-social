import React from 'react';
import { NavLink } from 'react-router-dom';
import './login.css';


function Login() {
    return (
        <>
            {/* <h1>hello</h1> */}
            <div className="container">
                <form className="login">
                    <p>Login Here</p>
                    <input type="email" placeholder="Email" /><br />
                    <input type="password" placeholder="Password" /><br />
                    <input type="button" value="Sign in" /> &nbsp;
                    <NavLink to="/registration">Create a Account ?</NavLink>
                    <br />
                    <NavLink to="#">Forgot Password?</NavLink>
                </form>

                {/* <div className="drops">
                    <div className="drop drop-1"></div>
                    <div className="drop drop-2"></div>
                    <div className="drop drop-3"></div>
                    <div className="drop drop-4"></div>
                    <div className="drop drop-5"></div>
                </div> */}

            </div>
        </>
    )
}

export default Login
