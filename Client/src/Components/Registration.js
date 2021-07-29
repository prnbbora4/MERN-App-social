import React from 'react'
import { NavLink } from 'react-router-dom';
import './registration.css';

function Registration() {
    return (
        <>
            <div className="containerr">
                <form>
                    <p>Register Here</p>
                    <input type="text" placeholder="Name" /><br />
                    <input type="email" placeholder="Email" /><br />
                    <input type="number" placeholder="Phone" /><br />
                    <input type="text" placeholder="Work" /><br />
                    <input type="password" placeholder="Password" /><br />
                    <input type="password" placeholder="Password" /><br />
                    <input type="button" value="Sign up" /> &nbsp;
                    <NavLink to="/login">Already Have a Account ?</NavLink> <br />
                </form>
            </div>
        </>
    )
}

export default Registration
