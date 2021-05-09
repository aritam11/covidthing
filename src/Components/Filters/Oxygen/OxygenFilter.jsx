import React, { useEffect, useState } from 'react';
import './OxygenFilter.css'


const OxygenFilter = () =>{

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


    return(
        <div className="filter">
                    <div className="content">
                        <h2 className="title">Additional Filters</h2>
                        <div classname="bloody">
                            <p class="name">Amount :</p>
                            <div className="amountrng">
                                <input type="range" min="5" max="100" step="5"  id="Oxyrange" onChange={rangeVal}/>
                                <span>
                                    {
                                        rng
                                    }
                                </span>
                            </div>
                        </div>
                        <div className="gender">
                            <p className="name">Gender :</p>
                            <div class="diff">
                                <span className="gen">
                                    <input type="radio" name="gentype" className="gentype" value="Male"/>
                                    <label>Male</label>
                                </span>
                                <span className="gen">
                                    <input type="radio" name="gentype" className="gentype" value="Female"/>
                                    <label>Female</label>
                                </span>
                                <span className="gen">
                                    <input type="radio" name="gentype" className="gentype" value="Others"/>
                                    <label>Others</label>
                                </span>
                            </div>
                        </div>
                        <div className="age">
                            <span className="age_range">
                                <p className="name">Age : &emsp;&emsp;between</p>
                                <input type="text" className="limit" maxLength="3"/>
                                <p className="name">to</p>
                                <input type="text" className="limit" maxLength="3"/>
                            </span>
                        </div>
                    </div> 
                </div>
    );
}



export default OxygenFilter;