import React from 'react';
import {Link} from 'react-router-dom'
import './Menu.css'


const Menu = () =>{
    return(
        <div className="menu">
            <ul className="menuList">
                
                <Link to = "/">
                <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="38.024" height="32.32" viewBox="0 0 38.024 32.32">
                    <path id="Path_4" data-name="Path 4" d="M21.012,3,2,20.111H7.7V35.32h8.867V23.913h8.342V35.32H34.32V20.111h5.7Z" transform="translate(-2 -3)" fill="#707070"/>
                </svg>

                </li>
                </Link>
                
                <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="28.334" height="28.334" viewBox="0 0 28.334 28.334">
                  <path id="Exclusion_2" data-name="Exclusion 2" d="M-1935.833-1346.666A14.183,14.183,0,0,1-1950-1360.833,14.183,14.183,0,0,1-1935.833-1375a14.183,14.183,0,0,1,14.167,14.167A14.183,14.183,0,0,1-1935.833-1346.666Zm-1.417-15.583v8.5h2.833v-8.5Zm0-5.667v2.833h2.833v-2.833Z" transform="translate(1950 1375)" fill="#707070"/>
                </svg>
                </li>
                <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="24.192" height="30.241" viewBox="0 0 24.192 30.241">
                     <path id="Exclusion_1" data-name="Exclusion 1" d="M-2248.581-1326.436c-6.9-1.728-12.1-8.82-12.1-16.5v-9.209l12.1-4.536,12.1,4.536v9.209c0,7.677-5.2,14.769-12.1,16.5Zm-2.047-13.622h0v3.779h4.536l-.118-3.775h3.822v-4.634h-3.78v-3.615h-4.536v3.78h-3.7v4.536l3.779-.071Z" transform="translate(2260.677 1356.677)" fill="#707070"/>
                </svg>
                </li>
                <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="26.084" height="15.65" viewBox="0 0 26.084 15.65">
                      <path id="Path_10" data-name="Path 10" d="M20.259,6l2.987,2.987-6.364,6.364-5.217-5.217L2,19.811,3.839,21.65l7.825-7.825,5.217,5.217,8.216-8.2,2.987,2.987V6Z" transform="translate(-2 -6)" fill="#707070"/>
                </svg>
                </li>
                

            </ul>
        </div>
    );
}

export default Menu;