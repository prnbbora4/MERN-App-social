import React, {useState, useContext} from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import './login.css';

import {UserContext} from '../App'

function Login  () {

    const {state, dispatch} = useContext(UserContext)

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async (e) => {
        e.preventDefault();

        const res = await fetch("/signin", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                email, 
                password,
            })
        });

        const data = res.json();

        if(res.status === 400 || !data){
            window.alert("Invalid Credentials");
        }else{
            dispatch({type:'USER', payload:true})
            window.alert("Login Successful");
            history.push("/");
        }
    }

    return (
        <>
            {/* <h1>hello</h1> */}
            <div className="containerl">
                <form className="login" method="POST">
                    <p>Login Here</p>
                    <input type="email" placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
                    <input type="password" placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
                    <input type="button" value="Sign in" onClick={loginUser}/> &nbsp;
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
