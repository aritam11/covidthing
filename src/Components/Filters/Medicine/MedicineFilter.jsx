import React from 'react';
import './MedicineFilter.css'

        const MedicineFilter = () =>{
            return(
                <div className="filter">
                            <div className="content">
                                <h2 className="title">Additional Filters</h2>
                                <div classname="bloody">
                                    <p class="name">Medicines :</p>
                                    <div className="type">
                                        <span className="pos">
                                            <span class="group">
                                                <input type="checkbox" class="exact" value="Remdesivir"/>
                                                <label>Remdesivir</label>
                                            </span>
                                            <span class="group">
                                                <input type="checkbox" class="exact" value="Ivermectin"/>
                                                <label>Ivermectin</label>
                                            </span>
                                            <span class="group">
                                                <input type="checkbox" class="exact" value="FabiFlu"/>
                                                <label>FabiFlu</label>
                                            </span>
                                        </span>
                                        <span className="neg">
                                            <span class="group">
                                                <input type="checkbox" class="exact" value="Cipremi"/>
                                                <label>Cipremi</label>
                                            </span>
                                            <span class="group">
                                                <input type="checkbox" class="exact" value="Azithromycin"/>
                                                <label>Azithromycin</label>
                                            </span>
                                            <span class="group">
                                                <input type="checkbox" class="exact" value="Favipiravir"/>
                                                <label>Favipiravir</label>
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
            );
        }

export default MedicineFilter;