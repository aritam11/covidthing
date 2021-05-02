import React from 'react'
import './LogIn.css'


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

        <div className="LogInForm">
            <h1>Sign in</h1>
            <input type="text" name="email" id="emailInp" onChange={this.onInputChange} placeholder="Email" className="login"/>
            <input type="password" name="password" id="passInp" onChange={this.onInputChange}placeholder="Password" className="login"/>
            <button onClick={this.onSubmitClick} className="login">submit</button>
        </div>


        );
    }

}


export default LogIn;