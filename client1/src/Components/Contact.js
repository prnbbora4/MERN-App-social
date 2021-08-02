import React, { useEffect, useState } from 'react'
import './contact.css';

function Contact() {

     // dynamic data the about page 
     const [userData, setUserData] = useState({name:"", email: "", message: ""});

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
             setUserData({ ...userData, name:data.name, email:data.email });
 
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


    //  storing data
    const handleInputs = (e) => {
        const name = e.target.name;
        const value = e.target.value

        setUserData({ ...userData, [name] : value})

    } 

    // send data to the backend
    const contactForm = async (e) => {
        e.preventDefault();

        const {name, email, message} = userData;

        const res = await fetch('/contact', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, message
            })
        });

        const data = await res.json();

        if(!data){
            console.log("message not send");
        }else{
            alert("Message sent")
            setUserData({ ...setUserData, message: ""});
        }
    }


    return (
        <>
            <div className="containerc">
            <form method="POST" className="contact">
                    <p>Get in touch</p>
                    <input type="email" name="email" onChange={handleInputs} value={userData.email} placeholder="Email" /><br />
                    <input type="text" name="name" onChange={handleInputs} value={userData.name} placeholder="Name" /><br />
                    <textarea name="message" onChange={handleInputs} value={userData.message} placeholder="Message" /><br />
                    <input type="button" onClick={contactForm} value="Send Message" /> &nbsp;
                    <br />
                </form>

            </div>
        </>
    )
}

export default Contact
