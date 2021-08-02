import React, {useState} from 'react'
import { NavLink, useHistory } from 'react-router-dom';
import './registration.css';

function Registration() {
    const history = useHistory();
    // use of react hooks useState
    const [user, setUser] = useState({
        name:"", email:"", phone:"", work:"", password:"", cpassword:""
    });

    // get user inputs from the form
    let name, value;
    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name] : value})
    }

    // send data to the backend
    const PostData = async(e) => {
        e.preventDefault();

        // object destructuring to get data from the user variable
        const {name, email, phone, work, password, cpassword} = user;
        const res= await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                name, email, phone, work, password, cpassword
            })
        });

        const data = await res.json();
        if(data.status === 422 || !data){
            window.alert("Invalid Registration");
            console.log("Invalid Registration");
        }else{
            window.alert("Registration successful");
            console.log("Registration successful");    
            
            history.push("/login");
        }


    }


    return (
        <>
            <div className="containerr">
                <form method="POST"> 
                    <p>Register Here</p>
                    <input type="text" placeholder="Name" name="name" value={user.name} onChange={handleInputs} /><br />
                    <input type="email" placeholder="Email" name="email" value={user.email} onChange={handleInputs} /><br />
                    <input type="number" placeholder="Phone" name="phone" value={user.phone} onChange={handleInputs} /><br />
                    <input type="text" placeholder="Work" name="work" value={user.work} onChange={handleInputs} /><br />
                    <input type="password" placeholder="Password" name="password" value={user.password} onChange={handleInputs} /><br />
                    <input type="password" placeholder="Confirm Password" name="cpassword" value={user.cpassword} onChange={handleInputs} /><br />
                    <input type="button" value="Sign up" onClick={PostData} /> &nbsp;
                    <NavLink to="/login">Already Have a Account ?</NavLink> <br />
                </form>
            </div>
        </>
    )
}

export default Registration
