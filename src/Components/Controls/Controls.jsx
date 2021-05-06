import React, { useState } from 'react'
import './Controls.css'
import {Link} from 'react-router-dom'


const Controls = () =>{

    const [rng, setRng] = useState(50);


    const rangeVal = (event) =>{
        var i = event.target.value;
        setRng(i);
    }

    return(
        <div>
        <div id="topControlBar">
            <div id="control-div">
            <input type="text" id="city" placeholder="search city" />
            <select name="item" id="item">
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

                    }km
                </span>
            </div>
            </div>
            <div id="cr-li">
                <Link to='/login'>
                    <div>
                        Log in
                    </div>
                </Link>
                <div>
                    <button id="cr">
                        Create request
                    </button>
                </div>
            </div>

            
        </div>
        <hr/>
        </div>
    );
}

export default Controls;