import React from 'react'
import './LogIn.css'
import {Link} from 'react-router-dom'
import Menu from '../../Components/Menu/menu';


class LogIn extends React.Component{
   constructor(props){
       super(props);
       this.state={
           name:'',
           phNo:'',
           altPhNo:'',
           email:'',
           password:'',
           confPass:''
       }
   }

onInputChange = (event)=>{

    const target = event.target;
    const value = target.value;
    const inpname = target.name;

    this.setState({[inpname]:value});

}

onSubmitClick = () =>{
    console.log(this.state);
}



render(){
    return(
        <>
        <Menu/>
        <div className="LogInForm">
            <h1>Log in</h1>
            <input type="text" name="email" id="emailInp" onChange={this.onInputChange} placeholder="Email" className="login"/>
            <input type="password" name="password" id="passInp" onChange={this.onInputChange}placeholder="Password" className="login"/>
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