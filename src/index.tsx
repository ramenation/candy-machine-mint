import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { render } from "react-dom";
import './index.css';
import App from './App';
import GetNood from './GetNood';
import Main from './main';
import reportWebVitals from './reportWebVitals';
import Contact from './contact';


const rootElement = document.getElementById("root");
render(
  <BrowserRouter> {/* this element wraps the whole site */}
  

    <Routes>
      <Route path="/" element={<Main />}> {/* nesting these links under app route*/}
        <Route path="GetNood" element={<GetNood />} />
        <Route path="Contact" element={<Contact />} />        
    
        <Route path="*" 
          element={
            <main style={{ padding: "1rem"}}>
               <p>You are lost.</p>
            </main>
          }
          />
      </Route>
    </Routes>
  </BrowserRouter>,
  
  rootElement
);




/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
