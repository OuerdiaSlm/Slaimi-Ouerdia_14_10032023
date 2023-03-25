import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Homepage from './pages/homePage';
import EmployeePage from './pages/currentEmployee';
import Header from './components/header/header';
import Footer from './components/footer/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Router>
      <Header/>
          <Routes>
            <Route exact path="/" element={<Homepage/>}/>
            <Route exact path="EmployeePage" element={<EmployeePage/>}/>
          </Routes>
        <Footer/>
      </Router>
  </React.StrictMode>
);

reportWebVitals();
