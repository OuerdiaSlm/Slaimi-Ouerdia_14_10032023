import React from 'react';
import './employeeTable.css';

function EmployeeTable  ()  {

  const employeeDatas=JSON.parse(localStorage.getItem("users"))
  console.log(employeeDatas);

  return (
    <section className="employeeTableSection">
      <table>
        <caption>Current Employees</caption>
        <thead>
            <tr>
                <th scope="col">First name</th>
                <th scope="col">Last name</th>
                <th scope="col">Start date</th>
                <th scope="col">Departement</th>
                <th scope="col">Date of birth</th>
                <th scope="col">Street</th>
                <th scope="col">City</th>
                <th scope="col">State</th>
                <th>Zip code</th>
            </tr>
        </thead>
        <tbody>
            
            {employeeDatas.map((employe, id) => (  
              
              <tr>
              {console.log(employe)}
              <td>{employe.firstName}</td>
              <td>{employe.lastName}</td>
              <td>{employe.startDate}</td>
              <td>{employe.department}</td>
              <td>{employe.birth}</td>
              <td>{employe.street}</td>
              <td>{employe.city}</td>
              <td>{employe.state}</td>
              <td>{employe.zipCode}</td>
              </tr>

              
              ))}
            
        </tbody>
      </table>
    </section>
    
  );
};

export default EmployeeTable;