import React, { useState } from 'react'
import './VerifyEmail.css'


const VerifyEmail = () =>{
    const [otp,setOtp] = useState('');

    const onInputChange = (event) =>{
        const target = event.target;
        const name = target.name;
        const value = target.value

        setOtp(value);
        console.log(otp);
    }

    const onOtpSubmit = () =>{
        console.log(otp);
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