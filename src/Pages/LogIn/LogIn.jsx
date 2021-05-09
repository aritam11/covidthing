import React from 'react'
import './LogIn.css'
import {Link} from 'react-router-dom'
import Menu from '../../Components/Menu/menu';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class LogIn extends React.Component{
   constructor(props){
       super(props);
       this.state={
           email:'',
           pass:''
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
        data.message==="successful login"?window.location.href = "/":console.log("log in failed");
        cookies.set('loggedIn','logged in',{path:'/'});
    })
    .catch(err => console.log("error:",err))
}



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
        </>

        );
    }

}


export default LogIn;