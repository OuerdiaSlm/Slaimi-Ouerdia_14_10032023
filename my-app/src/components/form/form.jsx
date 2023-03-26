import React from 'react';
import { useState } from "react";
import dataStates from '../../datas/statesDatas'
import{setUsersData} from '../../feature/employees.slice'
import { useDispatch } from "react-redux";

import './form.css';

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
  const dispatch=useDispatch()


  const saveClick=(e) => {

    const local=JSON.parse(localStorage.getItem("users"))

    dispatch(setUsersData(local))
    

    
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

    let userTab=[];

    if(local){
    console.log(local)
    userTab=local
    userTab.push(user)

    }
    else{
    userTab.push(user)
    }
    console.log(user)

    localStorage.setItem("users", JSON.stringify(userTab))
    console.log(userTab)
  };

  return (
    <section>
    <h2 className="createEmployeeText">Create Employee</h2>
      <form className="createEmployee">
      
        <div className="informationsForm">
        <h3>INFORMATIONS</h3>
          <div className="inputs">
            <div className="firstLastName">
              <div className="labelInput">
                <label>First Name</label>{<br/>}
                <input type="text" name="firstName" required onChange={(e)=>setFirstName(e.target.value)}/>
              </div>

              <div className="labelInput">
                <label>Last Name</label>{<br/>}
                <input type="text" name="lastName" required onChange={(e)=>setLastName(e.target.value)}/>
              </div>
            </div>

            <div className="date">
              <div className="labelInput">
                <label>Date of Birth</label>{<br/>}
                <input type="date" name="firstName" required onChange={(e)=>setBirth(e.target.value)}/>
              </div>

              <div className="labelInput">
                <label>Start Date</label>{<br/>}
                <input type="date" name="firstName" required onChange={(e)=>setStartDate(e.target.value)}/>
              </div>
            </div>

            {/** Adress */}
            <h3>ADRESS</h3>
            <div className="adressDivGlobal">
            <div>
              <div className="adressDiv">
                <label>Street</label>{<br/>}
                <input type="text" name="firstName" required onChange={(e)=>setStreet(e.target.value)}/>
              </div>
              
              <div className="adressDiv">
                <label>City</label>{<br/>}
                <input type="text" name="firstName" required onChange={(e)=>setCity(e.target.value)}/>
              </div>
            </div>

            <div>
              <div className="adressDiv">
                <label>State</label>{<br/>}

                <select name="State" onChange={(e)=>setState(e.target.value)}>
                {dataStates.map((item, id) => (   
                <option key={id}>
                  {item.name}
                </option>
              ))}
                </select>
              </div>
              
              <div className="adressDiv">
                <label>Zip Code</label>{<br/>}
                <input type="number" name="firstName" required onChange={(e)=>setZipCode(e.target.value)}/>
              </div>
            </div>
          </div>
          </div>

          <div className="labelInput">
              <label>Department</label>{<br/>}
              <select className="departementSelect" name="department" onChange={(e)=>setDepartment(e.target.value)}>
                <option>Sales</option>
                <option>Marketing</option>
                <option>Engineering</option>
                <option>Human Resources</option>
                <option>Legal</option>
              </select>
            </div>
            <input type="submit" value="Save" className="saveButton" onClick={(e)=>saveClick(e)}/>
        </div>
        
      </form>
      
    </section>
    
  );
};

export default Form;