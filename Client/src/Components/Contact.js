import React from 'react'
import './contact.css';

function Contact() {
    return (
        <>
            <div className="container">
            <form className="contact">
                    <p>Get in touch</p>
                    <input type="email" placeholder="Email" /><br />
                    <input type="text" placeholder="Name" /><br />
                    <textarea  placeholder="Message" /><br />
                    <input type="button" value="Send Message" /> &nbsp;
                    <br />
                </form>

            </div>
        </>
    )
}

export default Contact
