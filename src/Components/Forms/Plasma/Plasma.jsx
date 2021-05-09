import React from 'react';
import './Plasma.css'


const Plasma = () =>{
    return(
        <div className="plasma">
            <div className="plasmaReq">
                <input type="text" name="patient_name" id="nameInp" placeholder="Patient Name" className="Reqplasma"/>
                <input type="text" name="age" id="ageInp" placeholder="Age" className="Reqplasma"/>
                <input type="text" name="blood" id="bloodInp" placeholder="Blood Group" className="Reqplasma"/>
                <textarea rows="10" name="special_req" id="sp_reqInp" placeholder="Special Request" className="Reqoxygen"/>
                <button className="ReqSubmit">Submit</button>        
            </div>
        </div>
    );
}

export default Plasma;