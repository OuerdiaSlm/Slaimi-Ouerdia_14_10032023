import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Homepage from './pages/homePage';
import EmployeePage from './pages/currentEmployee';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import userSlice from "../src/feature/employees.slice";
import { Provider } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';
import {combineReducers} from '@reduxjs/toolkit';

import {PersistGate} from 'redux-persist/es/integration/react'
import {persistStore} from 'redux-persist'

// store
// D redux persiste
const persistConfig = {
  key: "root",
  version: 1,
  storage
};

const reducer = combineReducers({
  user: userSlice
});

const persistReducerA = persistReducer(persistConfig, reducer);

// F Redux persiste

const store = configureStore({
  /**reducer: {  
    user: userSlice
  }**/
  // redux persiste
  reducer: persistReducerA
});


// index.js
const root = ReactDOM.createRoot(document.getElementById('root'));

// redux persiste
let persistore = persistStore(store);
root.render(
  <React.StrictMode>
    <Provider store={store}> 
      <PersistGate persistor={persistore}>
        <Router>
          <Header/>
            <Routes>
              <Route exact path="/" element={<Homepage/>}/>
              <Route exact path="EmployeePage" element={<EmployeePage/>}/>
            </Routes>
          <Footer/>
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
