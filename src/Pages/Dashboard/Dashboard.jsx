import React from 'react';
import "./Dashboard.css"
import Menu from '../../Components/Menu/menu'
import Controls from  '../../Components/Controls/Controls'


const Dashboard = () =>{
    return(
        <div>
            <Controls/>
            <Menu/>
            <div className="filter">
                <div className="content">
                    <h2 className="title">Additional Filters</h2>
                    <div classname="bloody">
                        <p class="name">Blood group :</p>
                        <div className="type">
                            <span className="pos">
                                <span class="group">
                                    <input type="checkbox" class="exact" value="AB+"/>
                                    <label>AB+</label>
                                </span>
                                <span class="group">
                                    <input type="checkbox" class="exact" value="A+"/>
                                    <label>A+</label>
                                </span>
                                <span class="group">
                                    <input type="checkbox" class="exact" value="B+"/>
                                    <label>B+</label>
                                </span>
                                <span class="group">
                                    <input type="checkbox" class="exact" value="O+"/>
                                    <label>O+</label>
                                </span>

                            </span>
                            <span className="neg">
                            <span class="group">
                                    <input type="checkbox" class="exact" value="AB-"/>
                                    <label>AB-</label>
                                </span>
                                <span class="group">
                                    <input type="checkbox" class="exact" value="A-"/>
                                    <label>A-</label>
                                </span>
                                <span class="group">
                                    <input type="checkbox" class="exact" value="B-"/>
                                    <label>B-</label>
                                </span>
                                <span class="group">
                                    <input type="checkbox" class="exact" value="O-"/>
                                    <label>O-</label>
                                </span>
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
        </div>
    );
}

export default Dashboard;