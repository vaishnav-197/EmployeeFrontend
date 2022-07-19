import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import App from './App';
import CreateEmployee from './pages/CreateEmployee/CreateEmployee';
import Login from './pages/Login/Login';
import EmployeeListing from './pages/EmployeeListing/EmployeeListing';
import EditEmployee from './pages/EditEmployee/EditEmployee';


import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import { store } from './app/store'
import { Provider } from 'react-redux'
import DisplayEmployee from './pages/DisplayEmployee/DisplayEmployee';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/create' element={<CreateEmployee/>} />
          <Route path='/list' element={<EmployeeListing/>} />
          <Route path='/edit/:id' element={<EditEmployee/>} />
          <Route path='/employee/:id' element={<DisplayEmployee/>} />
        </Routes>
    </BrowserRouter>
    </Provider>
   
    {/* <App/> */}
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
