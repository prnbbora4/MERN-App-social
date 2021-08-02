import React, { useEffect, useState } from 'react'
import './home.css';

function Home() {

    // dynamic data the about page 
    const [userData, setUserData] = useState('');
    const [show, setShow] = useState('');

    // visit contact page with authenticate
    const callHomePage = async () => {
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
            setShow(data.name)

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
        callHomePage();
    }, []);

    return (
        <>
        <div className="container">
            <div className="homepage">
                <h1>Welcome </h1> <br/> <br/>
                <h2>{ userData.name }</h2>
                <p>{ show ? "Happy to see you": "We are MERN Developer" }</p>
            </div>

        </div>
        </>
    )
}

export default Home
