import React, { useState } from 'react'
import './Controls.css'


const Controls = () =>{

    const [rng, setRng] = useState(0);


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
                <label htmlFor="range">Range:</label>
                <input type="range" min="0" max="100" step="10" id="range" onChange={rangeVal}/>
                <span>
                    {
                        rng

                    }
                </span>
            </div>
            </div>
            <div id="cr-li">
                <div>
                    Log in
                </div>
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