import React from 'react';
import { useState } from "react";
import dataStates from '../../datas/statesDatas'
import{setUsersData} from '../../feature/employees.slice'
import { useDispatch } from "react-redux";
import {Modal} from "modal-click-slm";
import './form.css';
  
let userTab =[];
function Form  ()  {
  const [firstName,setFirstName]=useState();
  const [lastName,setLastName]=useState();
  const [startDate,setStartDate]=useState();
  const [department,setDepartment]=useState();
  const [birth,setBirth]=useState();
  const [street,setStreet]=useState();
  const [city,setCity]=useState();
  const [state,setState]=useState();
  const [zipCode,setZipCode]=useState();
  // Modal boolean 
  const [modal, setModal] = useState(false);
  const dispatch=useDispatch()

  const saveClick=(e) => {
    e.preventDefault();

    if ( firstName.length < 2) {
      alert('Please entry a First Name (min 2 lettres)');
    } else if ( lastName.length < 2) {
      alert('Please entry a Last Name (min 2 lettres)');
    } else if ( startDate == null) {
      alert('Please choose a Start date');
    } else if ( department == null) {
      alert('Please select a Department');
    } else if ( birth == null) {
      alert('Please choose a Date of birth');
    } else if ( street.length < 2) {
      alert('Please entry a Street (min 2 lettres)');
    } else if ( city.length < 2) {
      alert('Please entry a City (min 2 lettres)');
    } else if ( state == null) {
      alert('Please select a State');
    } else if ( zipCode.length === 0) {
      alert('Please entry a Zip code');
    } else {
        
    setModal(true);

    let user= {
      firstName: firstName,
      lastName:lastName,
      startDate:startDate,
      department:department,
      birth:birth,
      street:street,
      city:city,
      state:state,
      zipCode:zipCode,
    }
    
      // Sending data in an array
      userTab = Object.assign([], userTab);
      userTab.push(user);

      // Sending employee datas in the store (redux)
      dispatch(setUsersData(userTab))
    }
  };
 
  return (
    <section>
      <h2 className="createEmployeeText">Create Employee</h2>
      <form  className="createEmployee">
      
        <div className="informationsForm">
        <h3>INFORMATIONS</h3>
          <div className="inputs">
            <div className="firstLastName">
              <div className="labelInput">
                <label>First Name{<br/>}
                  <input type="text" name="firstName" required onChange={(e)=>setFirstName(e.target.value)}/>
                </label>
              </div>

              <div className="labelInput">
                <label>Last Name{<br/>}
                  <input type="text" name="lastName" required onChange={(e)=>setLastName(e.target.value)}/>
                </label>
              </div>
            </div>

            <div className="date">
              <div className="labelInput">
                <label>Date of Birth{<br/>}
                  <input type="date" name="firstName" required onChange={(e)=>setBirth(e.target.value)}/>
                </label>
              </div>

              <div className="labelInput">
                <label>Start Date{<br/>}
                  <input type="date" name="firstName" required onChange={(e)=>setStartDate(e.target.value)}/>
                </label>
              </div>
            </div>
            
            <h3>ADRESS</h3>
            <div className="adressDivGlobal">
            <div>
              <div className="adressDiv">
                <label>Street{<br/>}
                  <input type="text" name="firstName" required onChange={(e)=>setStreet(e.target.value)}/>
                </label>
              </div>
              
              <div className="adressDiv">
                <label>City{<br/>}
                  <input type="text" name="firstName"  onChange={(e)=>setCity(e.target.value)} required/>
                </label>
              </div>
            </div>

            <div>
              <div className="adressDiv">
                <label>State{<br/>}
                  <select name="State" onChange={(e)=>setState(e.target.value)}>
                  {dataStates.map((item, id) => (   
                    <option key={id}>
                      {item.name}
                    </option>
                  ))}
                  </select>
                </label>
              </div>
              
              <div className="adressDiv">
                <label>Zip Code{<br/>}
                  <input type="number" name="firstName" required onChange={(e)=>setZipCode(e.target.value)}/>
                </label>
              </div>
            </div>
          </div>
          </div>

          <div className="departmentDiv">
              <label>Department{<br/>}
                <select className="departementSelect" name="department" onChange={(e)=>setDepartment(e.target.value)} required pattern="Marketing | Engineering">
                  <option>Sales</option>
                  <option>Marketing</option>
                  <option>Engineering</option>
                  <option>Human Resources</option>
                  <option>Legal</option>
                </select>
              </label>
            </div>
            <input type="submit" value="Save" className="saveButton" onClick={(e)=>saveClick(e)}/>
            
        </div>
        
      </form>
      {modal && (
        <Modal trigger={modal} setTrigger={setModal}/>
      )}
      
    </section>
  );
};

export default Form;