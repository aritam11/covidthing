import React from 'react';
import './Medicine.css'


const Medicine = () =>{
    return(
        <div className="medicine">
            <div class="medicineReq">
                <input type="text" name="patient_name" id="nameInp" placeholder="Patient Name" class="Reqmedicine"/>
                <input type="text" name="age" id="ageInp" placeholder="Age" class="Reqmedicine"/>
                <input type="text" name="med_name" id="medInp" placeholder="Medicine Name" class="Reqmedicine"/>               
                <textarea rows="10" name="special_req" id="sp_reqInp" placeholder="Special Request" class="Reqoxygen"/>
                <button className="ReqSubmit">Submit</button> 
            </div>
        </div>
    );
}

export default Medicine;