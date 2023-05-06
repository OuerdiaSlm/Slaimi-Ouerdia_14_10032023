import React, { useState } from 'react';
import './employeeTable.css';
import { useSelector } from "react-redux";
import DataTable from 'react-data-table-component'

function EmployeeTable  ()  {
  let employeeDatas=useSelector((state) => state.user.users);
  
  // React table
  const columns = [
    {
      name : "FirstName",
      selector : row => row.firstName,
      sortable : true
    },
    {
      name : "lastName",
      selector : row => row.lastName,
      sortable : true
    },
    {
      name : "startDate",
      selector : row => row.startDate,
      sortable : true
    },
    {
      name : "department",
      selector : row => row.department,
      sortable : true
    },
    {
      name : "birth",
      selector : row => row.birth,
      sortable : true
    },
    {
      name : "street",
      selector : row => row.street,
      sortable : true
    },
    {
      name : "city",
      selector : row => row.city,
      sortable : true
    },
    {
      name : "state",
      selector : row => row.state,
      sortable : true
    },
    {
      name : "zipCode",
      selector : row => row.zipCode,
      sortable : true
    },
  ]
  
  //search react table
  const [records, setRecords] = useState(employeeDatas);
  function searchBarFilter (event) {
    const newData = employeeDatas.filter(row => {
      return row.firstName.toLowerCase().includes(event.target.value.toLowerCase())
    })
    setRecords(newData)
  }

  return (
    <section className="employeeTableSection">
      <div className="searchBarDiv">
        <label htmlFor ="searchBar">Search a employee : 
          <br/>
          <input className="searchBar" onChange={searchBarFilter}></input>
        </label>
      </div>
      <DataTable columns={columns} data={records} fixedHeader pagination> </DataTable>
    </section>
  );
};

export default EmployeeTable;