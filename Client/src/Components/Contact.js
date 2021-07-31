import React, { useEffect, useState } from 'react'
import './contact.css';

function Contact() {

     // dynamic data the about page 
     const [userData, setUserData] = useState('');

     // visit contact page with authenticate
     const callContactPage = async () => {
         try {
             const res = await fetch('/getData', {
                 method: "GET",
                 headers: {
                     "Content-Type": "application/json"
                 },
             });
 
             const data = await res.json();
             console.log(data);
             setUserData(data);
 
             if(!res.status === 200){
                 const error = new Error(res.error);
                 throw error;
             }
 
             
         } catch (error) {
             console.log(error);
         }
     }
 
     // use of useEffect hooks to call function to load first
     useEffect(() => {
         callContactPage();
     }, []);

    return (
        <>
            <div className="containerc">
            <form className="contact">
                    <p>Get in touch</p>
                    <input type="email" value={userData.email} placeholder="Email" /><br />
                    <input type="text" value={userData.name} placeholder="Name" /><br />
                    <textarea  placeholder="Message" /><br />
                    <input type="button" value="Send Message" /> &nbsp;
                    <br />
                </form>

            </div>
        </>
    )
}

export default Contact
