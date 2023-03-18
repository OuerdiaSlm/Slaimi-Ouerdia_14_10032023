import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './../../assets/logo.png'
import './header.css';

function Header(){
  return (
    <header className="headerGlobal">
      <Link to={"/"}><img src={logo} className="logo" alt="Logo" /></Link>
      <Link to={"/employee-list"}><h3 className="employeesLink">View Current Employees</h3></Link>
    </header>
  );
};

export default Header;
