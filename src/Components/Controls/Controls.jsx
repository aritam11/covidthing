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
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 6C13.1 6 14 6.9 14 8C14 9.1 13.1 10 12 10C10.9 10 10 9.1 10 8C10 6.9 10.9 6 12 6ZM12 16C14.7 16 17.8 17.29 18 18H6C6.23 17.28 9.31 16 12 16ZM12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="#707070"/>
                        <path d="M6 18C12 14 14 16.5 18 18H6Z" fill="#707070"/>
                        <path d="M14 7.99995C14 8.79995 12.6667 9.66662 12 9.99995C11 9.6666 9.2 8.79991 10 7.99995C9 7.4999 11.5 6.49995 12 5.99995C12.5 5.49995 14 6.99995 14 7.99995Z" fill="#707070"/>
                        <path d="M12 9.99995C12.6667 9.66662 14 8.79995 14 7.99995C14 6.99995 12.5 5.49995 12 5.99995C11.5 6.49995 9 7.4999 10 7.99995M12 9.99995C11.6667 9.49997 10.8 8.39999 10 7.99995M12 9.99995C11 9.6666 9.2 8.79991 10 7.99995M6 18C12 14 14 16.4999 18 18H6Z" stroke="#707070"/>
                    </svg>
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