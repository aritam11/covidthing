import React from 'react';
import './Medicine.css'


const Medicine = () =>{

    const onSubmitClick = () =>{
        fetch('http://localhost:3000/newrequest/medicines')
        .then(resp => resp.json())
        .then(data => console.log(data));
    }

    return(
        <div className="medicine">
            <div className="medicineReq">
                <input type="text" name="patient_name" id="nameInp" placeholder="Patient Name" className="Reqmedicine"/>
                <input type="text" name="age" id="ageInp" placeholder="Age" className="Reqmedicine"/>
                <input type="text" name="med_name" id="medInp" placeholder="Medicine Name" className="Reqmedicine"/>               
                <textarea rows="10" name="special_req" id="sp_reqInp" placeholder="Special Request" className="Reqoxygen"/>
                <button className="ReqSubmit" onClick={onSubmitClick}>Submit</button> 
            </div>
        </div>
    );
}

export default Medicine;