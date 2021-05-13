import React from 'react'
import './LogIn.css'
import {Link} from 'react-router-dom'
import Menu from '../../Components/Menu/menu';
import Cookies from 'universal-cookie';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

const cookies = new Cookies();

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

class LogIn extends React.Component{
   constructor(props){
       super(props);
       this.state={
           email:'',
           pass:'',
           err:'',
           open:false
       }
   }

onInputChange = (event)=>{

    const target = event.target;
    const value = target.value;
    const inpname = target.name;

    this.setState({[inpname]:value});

}

onSubmitClick = () =>{
    fetch('http://localhost:3000/login',{
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(this.state)
    })
    .then(response => response.json())
    .then(data => {
        if(data.message==="successful login"){
          //  var emailId = document.getElementById('emailInp')  
            window.location.href = "/";
            // cookies.set('email', emailId);
            cookies.set('loggedIn',true,{path:'/'});
        }
        else{
            this.setState({err:data.message,open:true});
            console.log("login failed");
            cookies.set('loggedIn',false,{path:'/'});
        }
    })
    .catch(err => console.log("error:",err))
}

useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

handleClick = () => {
    this.setState({open:true});
  };

handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({open:false});;
  };



render(){
    return(
        <>
        <Menu/>
        <div className="LogInForm">
            <h1>Log in</h1>
            <input type="text" name="email" id="emailInp" onChange={this.onInputChange} placeholder="Email" className="login"/>
            <input type="password" name="pass" id="passInp" onChange={this.onInputChange}placeholder="Password" className="login"/>
            <button onClick={this.onSubmitClick} className="login">submit</button><br/>
            <div>
                Don't have an account? <Link to='/signup'>Register</Link>
            </div>
        </div>
        <Snackbar open={this.state.open} autoHideDuration={5000} onClose={this.handleClose}>
                <Alert onClose={this.handleClose} severity="error">
                  {this.state.err}
                </Alert>
        </Snackbar>
        </>

        );
    }

}


export default LogIn;