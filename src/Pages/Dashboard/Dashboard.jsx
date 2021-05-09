import React, { useState } from 'react';
import "./Dashboard.css"
import Menu from '../../Components/Menu/menu'
import Controls from  '../../Components/Controls/Controls'
import Modal from "react-modal"
import * as Filters from '../../Components/Filters/Filter';
import Selectpls from '../../Components/Selectpls';


Modal.setAppElement("#root");
Modal.defaultStyles.content.padding = '0';
Modal.defaultStyles.content.borderRadius = '20px';

const Dashboard = () =>{

    const[openModal , setopenModal] = useState(false);

    const handleModal =()=>{

        setopenModal(true)

    } 

    const [moreFilter , setmoreFilter] = useState('plasmaFilter');


    const FilterReq=(e)=> {

        const Filter = Filters[e];
        return <Filter />
    }

    return(
        <div>
            <Controls onChange={(value)=> setmoreFilter(value + 'Filter')}/>
            <Menu/>
            <div className="filter">
                <div className="content">
                    <h2 className="title">Additional Filters</h2>
                    <div className="bloody">
                        <p className="name">Blood group :</p>
                        <div className="type">
                            <span className="pos">
                                <span className="group">
                                    <input type="checkbox" className="exact" value="AB+"/>
                                    <label>AB+</label>
                                </span>
                                <span className="group">
                                    <input type="checkbox" className="exact" value="A+"/>
                                    <label>A+</label>
                                </span>
                                <span className="group">
                                    <input type="checkbox" className="exact" value="B+"/>
                                    <label>B+</label>
                                </span>
                                <span className="group">
                                    <input type="checkbox" className="exact" value="O+"/>
                                    <label>O+</label>
                                </span>

                            </span>
                            <span className="neg">
                            <span className="group">
                                    <input type="checkbox" className="exact" value="AB-"/>
                                    <label>AB-</label>
                                </span>
                                <span className="group">
                                    <input type="checkbox" className="exact" value="A-"/>
                                    <label>A-</label>
                                </span>
                                <span className="group">
                                    <input type="checkbox" className="exact" value="B-"/>
                                    <label>B-</label>
                                </span>
                                <span className="group">
                                    <input type="checkbox" className="exact" value="O-"/>
                                    <label>O-</label>
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className="gender">
                        <p className="name">Gender :</p>
                        <div className="diff">
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
            <Modal isOpen={openModal}  onRequestClose={()=> setopenModal(false)}>
            <span class="closeFilter" onClick={()=> setopenModal(false)}>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="#707070"/>
                        </svg>
                    </span>
                    {FilterReq(moreFilter)}
            </Modal>
            <div className="iconFilter"onClick={handleModal}>
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.50326 9.53729C8.71506 9.76778 8.83134 10.0689 8.83134 10.3803V19.5584C8.83134 20.1108 9.49789 20.3911 9.89243 20.0028L12.4527 17.0687C12.7954 16.6576 12.9843 16.454 12.9843 16.0471V10.3824C12.9843 10.0709 13.1027 9.76986 13.3124 9.53935L20.659 1.56775C21.2092 0.969718 20.7857 0 19.9717 0H1.84396C1.02997 0 0.604295 0.967642 1.15664 1.56775L8.50326 9.53729Z" fill="#707070"/>
                </svg>
            </div>       
        </div>
    );
}

export default Dashboard;