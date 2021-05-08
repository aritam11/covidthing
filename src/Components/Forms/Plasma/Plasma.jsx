import React from 'react';
import './Plasma.css'


const Plasma = () =>{
    return(
        <div className="plasma">
            <div class="plasmaReq">
                <input type="text" name="patient_name" id="nameInp" placeholder="Patient Name" class="Reqplasma"/>
                <input type="text" name="age" id="ageInp" placeholder="Age" class="Reqplasma"/>
                <input type="text" name="blood" id="bloodInp" placeholder="Blood Group" class="Reqplasma"/>
                <textarea rows="10" name="special_req" id="sp_reqInp" placeholder="Special Request" class="Reqoxygen"/>
                <button className="ReqSubmit">Submit</button>        
            </div>
        </div>
    );
}

export default Plasma;