import React from 'react';
import './Oxygen.css'
import { useState,useEffect } from 'react';


const Oxygen = () =>{

    const [rng, setRng] = useState(50+" Litre");


    const rangeVal = (event) =>{
        var i = parseInt(event.target.value);
        setRng(i + " Litre");
    }

    useEffect(() =>{
        if(rng == "100 Litre"){
            setRng("More than 100 Litre")
        }
    },[rng])

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
                <span style={{fontSize:'0.9rem'}}>{rng}</span>
                <input type="range" min="5" max="100" step="5"  id="Oxyrange" onChange={rangeVal} style={{marginTop:'1rem' , width:'80%'}}/>
                <textarea rows="10" name="special_req" id="sp_reqInp" placeholder="Special Request" className="Reqoxygen"/>
                <button className="ReqSubmit" onClick={onSubmitClick}>Submit</button> 
            </div>
        </div>
    );
}

export default Oxygen;