import React, { useState } from 'react';
import * as Forms from '../../Components/Forms/forms';
import Menu from '../../Components/Menu/menu';
import Selectpls from '../../Components/Selectpls';
import './CreateReq.css'


const CreateReq = () =>{

    const [req , setReq] = useState();

    const handleOnChange = (e) =>{

        const val = e.target.value;
        setReq(val)
    }

    const Requested=(e)=> {

        if(!e){
            return <Selectpls/>
        }

        const Form = Forms[e];
        return <Form />
    }

    return(
        <div className="CreateReq">
            <Menu/>
            <div className="selector">
                <label id="request">Select a Request Type:</label>
                <select className="selectReq" onChange = {handleOnChange}>
                    <option></option>
                    <option>Oxygen</option>
                    <option>Plasma</option>
                    <option>Medicine</option>
                </select>
            </div>
            {Requested(req)}
        </div>
    );
}

export default CreateReq;