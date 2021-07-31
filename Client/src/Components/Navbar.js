import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../logo.svg"

import { UserContext } from '../App'


function Navbar() {

    const { state, dispatch } = useContext(UserContext)

    const RenderMenu = () => {
        if (state) {
            return (
                <>
                    <li className="nav-item">
                        <NavLink className="nav-link active" to="/">Home <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/logout">Logout</NavLink>
                    </li>
                </>
            )
        } else {
            return (
                <>
                    <li className="nav-item">
                        <NavLink className="nav-link active" to="/">Home <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/registration">Register</NavLink>
                    </li>
                </>
            )

        }
    }

    return (
        <div>
            <>

                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <img src={logo} width="60" height="30" class="d-inline-block align-top" alt="logo" />
                    <NavLink className="navbar-brand" to="/">MERN Development</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">

                            <RenderMenu />
                            
                        </ul>
                    </div>
                </nav>

            </>
        </div>
    )
}

export default Navbar
