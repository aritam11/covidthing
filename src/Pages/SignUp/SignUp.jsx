import React from 'react'
import './SignUp.css'
import {Link} from 'react-router-dom'
import Menu from '../../Components/Menu/menu';


class SignUp extends React.Component{
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



onSubmitClick = (e) =>{
   fetch('http://localhost:3000/signup',{
       method:'POST',
       headers:{'Content-type':'application/json'},
       body:JSON.stringify(this.state)
   })
   .then(response => response.json())
   .then(data => console.log(data));
}






render(){
    
    return(
        <>
        <Menu/>
        <div className="signUpForm">
            <h1>Sign up</h1>
            <input type="text" name="name" id="nameInp"  onChange={this.onInputChange} placeholder="Name" className="signin"/>
            <input type="text" name="phNo" id="phNoInp" onChange={this.onInputChange} placeholder="Phone no." className="signin"/>
            <input type="text" name="altPhNo" id="altPhNo" onChange={this.onInputChange} placeholder="Alternate phone no." className="signin"/>
            <input type="text" name="email" id="emailInp" onChange={this.onInputChange} placeholder="Email" className="signin"/>
            <input type="password" name="password" id="passInp" onChange={this.onInputChange}placeholder="Password" className="signin"/>
            <input type="password" name="confPass" id="confPassInp" onChange={this.onInputChange} placeholder="Confirm Password" className="signin"/>
            <button onClick={this.onSubmitClick} className="signin">submit</button>
            <br/>
            <div>
                Already have an account? <Link to='/login'>Login</Link>
            </div>
        </div>
        </>

        );
    }

}


export default SignUp;