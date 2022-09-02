import React from 'react';
import { NavLink,Link } from 'react-router-dom'


const CompNavBar = () =>
{


    return(
        <center>
        <div>

        <NavLink activeClassName="active" 
        to={"/Patient-Search"} 
        style={{border:"10px"}}>
            
            
            <p>
             Search </p> </NavLink>
        
        </div>

        </center>
    )
}

export default CompNavBar;