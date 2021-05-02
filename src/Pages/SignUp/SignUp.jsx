import React from 'react'
import './SignUp.css'


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

onSubmitClick = () =>{
    console.log(this.state);
}



render(){
    return(

        <div className="signInForm">
            <h1>Sign in</h1>
            <input type="text" name="name" id="nameInp"  onChange={this.onInputChange} placeholder="Name" className="signin"/>
            <input type="text" name="phNo" id="phNoInp" onChange={this.onInputChange} placeholder="Phone no." className="signin"/>
            <input type="text" name="altPhNo" id="altPhNo" onChange={this.onInputChange} placeholder="Alternate phone no." className="signin"/>
            <input type="text" name="email" id="emailInp" onChange={this.onInputChange} placeholder="Email" className="signin"/>
            <input type="password" name="password" id="passInp" onChange={this.onInputChange}placeholder="Password" className="signin"/>
            <input type="password" name="confPass" id="confPassInp" onChange={this.onInputChange} placeholder="Confirm Password" className="signin"/>
            <button onClick={this.onSubmitClick} className="signin">submit</button>
        </div>


        );
    }

}


export default SignUp;