import React from 'react'
import propic from "../images/photo1.jpg"
import "./about.css"
function About() {
    return (
        <>
            {/* <div className="container"> */}
                <div className="about">
                <form method="">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={propic} alt="pranab" />
                        </div>

                        <div className="col-md-6">
                            <div className="profile-head">
                                
                                <h5>Pranab Bora</h5>
                                <h5>MERN Stack developer</h5>

                                <ul className="nav nav-tabs">
                                    <li className="nav-item">
                                        <a className="nav-link " href="#home">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#profile">Timeline</a>
                                    </li>
                                </ul>

                            </div>
                        </div>
                        {/* <div className="col-md-2">
                            <input type="submit" className="btr btn-submit" value="Edit Profile"/>
                        </div>                    */}
                    </div>

                    <div className="row">
                        {/* left side url */}
                        <div className="col-md-4">
                            {/* <div className="profile-work">
                                <p>Work Links</p>
                                <a href="/">Youtube</a> <br/>
                                <a href="/">Instagram</a> <br/>
                                <a href="/">Facebook</a> <br/>
                                <a href="/">LinkedIn</a> <br/>
                            </div> */}
                        </div>

                        {/* right side data */}
                        <div className="col-md-8 pl-5 about-info">
                            <div className="tab-content fade show active" id="home">

                                <div className="row mt-0">
                                    <div className="col-md-6">
                                        <label> Name</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p> Pranab Bora</p>
                                    </div>
                                </div>

                                <div className="row mt-0">
                                    <div className="col-md-6">
                                        <label> Email</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p> a@b.com</p>
                                    </div>
                                </div>

                                <div className="row mt-0">
                                    <div className="col-md-6">
                                        <label> Phone</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p> 7845128956</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </form>
                </div>
            {/* </div> */}
        </>
    )
}

export default About
