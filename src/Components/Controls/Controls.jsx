import React, { useEffect, useState } from 'react'
import './Controls.css'
import {Link} from 'react-router-dom'



const Controls = (props) =>{

    const [rng, setRng] = useState(50+"km");

    

    const rangeVal = (event) =>{
        var i = parseInt(event.target.value) + 5;
        setRng(i + "km");
    }

    useEffect(() =>{
        if(rng == "105km"){
            setRng("All India")
        }
    },[rng])

    return(
        <div>
        <div id="topControlBar">
            <div id="control-div">
            <input type="text" id="city" placeholder="search city" />
            <select name="item" id="item" onChange={(e)=> props.onChange(e.target.value)}>
                <option value="plasma">plasma</option>
                <option value="oxygen">oxygen</option>
                <option value="medicines">medicines</option>
            </select>
            <div id="range-div">
                <label id="rangetxt" htmlFor="range">Range:</label>
                <input type="range" min="0" max="100" step="10" id="range" onChange={rangeVal}/>
                <span>
                    {
                        rng
                    }
                </span>
            </div>
            </div>
            <div id="cr-li">
                <Link to='/login'>
                    <div>
                        Log in
                    </div>
                </Link>
                <Link to='/createRequest'>
                    <div>
                        <button id="cr">
                            Create request
                        </button>
                    </div>
                </Link>
            </div>

            
        </div>
        <hr/>
        </div>
    );
}

export default Controls ;