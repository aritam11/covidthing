import React, { useState } from 'react'
import Cookies from 'universal-cookie/es6';
import './VerifyEmail.css'


const cookies = new Cookies(); 

const VerifyEmail = () =>{
    const [otp,setOtp] = useState('');

    const onInputChange = (event) =>{
        const target = event.target;
        const value = target.value
        setOtp(value);
        console.log(value,otp)
    }

    const onOtpSubmit = () =>{
        fetch('http://localhost:3000/verify',{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify({otp:otp})
        })
        .then(res => res.json())
        .then(data => {
            if(data.message==='successful verification'){
                cookies.set('loggedIn','true');
                window.location.replace('/covidthing');
            }
            else{
                console.log("invalid otp")
            }
            console.log(data);
        })
    }

    return(
        <div className="verifyEmail">
            <h1>Verify Email</h1>
            <p >We have sent you an otp on your registered email</p>
            <input type="text" name="otp" onChange={onInputChange} className="otp"/>
            <button name="submitOtp" className="otp" onClick={onOtpSubmit}>Submit</button>
        </div>
    );
}


export default VerifyEmail;