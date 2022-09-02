//Our Patient Presentation Component

import {useRef, useState} from 'react';

const PatientSearch = (props) => {

    let textRef = useRef();

    let [state, setState] = useState({search:" "});

    
  

    const listofPatients = () =>
    {
        console.log("1. Inside Patient List Presentation Components");
        props.listPatients();
    }

    const handleChange = (event) =>
    {

        setState
        (
            {
                ...state,
                [event.target.name]: event.target.value 



            }
        );

        props.searchPatient(event.target.value);
    
    }

    

    return (
        <div style={{ border: '5px solid skyblue' }}>
        <br />

        Patient List:

        <ol> 
        {props.searchedPatients && props.searchedPatients.map( (item,key) => <li key={key}> {item.name} </li> )}
        </ol>

        <tr> 
        {props.searchedPatients && props.searchedPatients.map( (item,key) => <li key={key}> {item.name} </li> )}
        </tr>

        <td> 
        {props.searchedPatients && props.searchedPatients.map( (item,key) => <li key={key}> {item.email} </li> )}
        </td>


        <br/><br/>
        <center>
        <input type="text" ref={textRef} name="search" value={state.search}
        onChange = {event => handleChange(event)} /> 
        </center>
        
        
        <br/><br/>
        Current value of search:{state.search}

        </div>
    )
}

export default PatientSearch;