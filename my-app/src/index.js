import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Homepage from './pages/homePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Router>
        <Routes>
          <Route exact path="/" element={<Homepage/>}/>
        </Routes>
      </Router>
  </React.StrictMode>
);

reportWebVitals();
