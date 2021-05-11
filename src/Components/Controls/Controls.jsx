import React, { useEffect, useState } from 'react'
import './Controls.css'
import {Link} from 'react-router-dom'
import Cookies from 'universal-cookie';


const cookies = new Cookies();

const Controls = (props) =>{

    const [rng, setRng] = useState(50+"km");
    const [loggedIn,setLoggedIn] = useState(false);

    useEffect(()=>{
        if(cookies.get('loggedIn')==='true'){
          console.log('cookie in',cookies.get('loggedIn'));
          setLoggedIn('state',true);
        }
        else{
          console.log("Not logged in");
          setLoggedIn(false);
          cookies.set('loggedIn',false,{path:'/'})
        }
        
      },[]);

    const loggedInChange = (loggedIn) =>{
        if(loggedIn){
            return (
                <>
                <Link to='/profile'>
                    <div>
                        Profile
                    </div>
                </Link>
                    <div onClick ={()=>{setLoggedIn(false);cookies.set('loggedIn',false,{path:'/'});console.log('cookie out',cookies.get('loggedIn'))}} id = "logOut">
                        log out
                    </div>
                </>
            );
        }
        else{
            return (
                <Link to='/login'>
                    <div>
                        Log in
                    </div>
                </Link>
            );
        }
    }
    

    const rangeVal = (event) =>{
        var i = parseInt(event.target.value) + 5;
        setRng(i + "km");
    }

    useEffect(() =>{
        if(rng === "105km"){
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
                {
                    loggedInChange(loggedIn)
                }
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