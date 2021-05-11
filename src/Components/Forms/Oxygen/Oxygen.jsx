import React from 'react';
import './Oxygen.css'


const Oxygen = () =>{

    const onSubmitClick = () =>{
        fetch('http://localhost:3000/newrequest/oxygen')
        .then(resp => resp.json())
        .then(data => console.log(data));
    }
    return(
        <div className="oxygen">
            <div className="oxygenReq">
                <input type="text" name="patient_name" id="nameInp" placeholder="Patient Name" className="Reqoxygen"/>
                <input type="text" name="age" id="ageInp" placeholder="Age" className="Reqoxygen"/>
                <input type="text" name="amount" id="amountInp" placeholder="Amount(in Litre)" className="Reqoxygen"/>
                <textarea rows="10" name="special_req" id="sp_reqInp" placeholder="Special Request" className="Reqoxygen"/>
                <button className="ReqSubmit" onClick={onSubmitClick}>Submit</button> 
            </div>
        </div>
    );
}

export default Oxygen;