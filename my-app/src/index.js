import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Homepage from './pages/homePage';
import EmployeePage from './pages/currentEmployee';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import userSlice from "../src/feature/employees.slice"
import { Provider } from 'react-redux'
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {  
    user: userSlice
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> 
      <Router>
        <Header/>
            <Routes>
              <Route exact path="/" element={<Homepage/>}/>
              <Route exact path="EmployeePage" element={<EmployeePage/>}/>
            </Routes>
          <Footer/>
        </Router>
      </Provider>
  </React.StrictMode>
);

reportWebVitals();
