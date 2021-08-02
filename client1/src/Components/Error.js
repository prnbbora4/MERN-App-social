import React from 'react'
import { NavLink } from 'react-router-dom';
import './error.css';

function Error() {
    return (
        <>
            <div className="container">
                <div className="error">
                    <h1>404</h1> <br /> <br /> <br /> <br />
                    <p>The page does not exist or removed !!</p>
                    <NavLink to="/" className=" btn btn-success">Back to Home</NavLink>

                </div>
            </div>
        </>
    )
}

export default Error
