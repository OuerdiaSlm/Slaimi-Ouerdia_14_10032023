import React from 'react';
import { useState } from "react";
import Dropdown from 'react-dropdown';
import './form.css';

function Form  ()  {

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
                <input type="text" name="firstName" required />
              </div>

              <div className="labelInput">
                <label>Last Name</label>{<br/>}
                <input type="text" name="lastName" required />
              </div>
            </div>

            <div className="date">
              <div className="labelInput">
                <label>Date of Birth</label>{<br/>}
                <input type="date" name="firstName" required />
              </div>

              <div className="labelInput">
                <label>Start Date</label>{<br/>}
                <input type="date" name="firstName" required />
              </div>
            </div>

            {/** Adress */}
            <h3>ADRESS</h3>
            <div className="adressDivGlobal">
            <div>
              <div className="adressDiv">
                <label>Street</label>{<br/>}
                <input type="text" name="firstName" required />
              </div>
              
              <div className="adressDiv">
                <label>City</label>{<br/>}
                <input type="text" name="firstName" required />
              </div>
            </div>

            <div>
              <div className="adressDiv">
                <label>State</label>{<br/>}
                <select name="department">
                </select>
              </div>

              {/** 
              {data.map((item, id) => (   
                <option key={id}>
                  {item.name}
                </option>
              ))}
              */}
              <div className="adressDiv">
                <label>Zip Code</label>{<br/>}
                <input type="number" name="firstName" required />
              </div>
            </div>
          </div>
          </div>

          <div className="labelInput">
              <label>Department</label>{<br/>}
              <select className="departementSelect" name="department">
                <option>Sales</option>
                <option>Marketing</option>
                <option>Engineering</option>
                <option>Human Resources</option>
                <option>Legal</option>
              </select>
            </div>
        </div>
      </form>
      
    </section>
    
  );
};

export default Form;