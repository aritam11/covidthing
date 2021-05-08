import React from 'react';
import './Oxygen.css'


const Oxygen = () =>{
    return(
        <div className="oxygen">
            <div class="oxygenReq">
                <input type="text" name="patient_name" id="nameInp" placeholder="Patient Name" class="Reqoxygen"/>
                <input type="text" name="age" id="ageInp" placeholder="Age" class="Reqoxygen"/>
                <input type="text" name="amount" id="amountInp" placeholder="Amount(in Litre)" class="Reqoxygen"/>
                <textarea rows="10" name="special_req" id="sp_reqInp" placeholder="Special Request" class="Reqoxygen"/>
                <button className="ReqSubmit">Submit</button> 
            </div>
        </div>
    );
}

export default Oxygen;