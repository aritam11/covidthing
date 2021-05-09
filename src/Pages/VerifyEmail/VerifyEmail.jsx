import React, { useState } from 'react'
import Cookies from 'universal-cookie/es6';
import './VerifyEmail.css'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

const cookies = new Cookies(); 

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));



const VerifyEmail = () =>{

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const [otp,setOtp] = useState('');

    const onInputChange = (event) =>{
        const target = event.target;
        const value = target.value
        setOtp(value);
    }

    const handleClick = () => {
        setOpen(true);
      };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };

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
            console.log(data)
            if(data.message==='successful verification'){
                cookies.set('loggedIn','true');
                window.location.replace('/covidthing');
            }
            else{
                setOpen(true);
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
            <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error">
                  Invalid OTP
                </Alert>
            </Snackbar>
        </div>
    );
}


export default VerifyEmail;