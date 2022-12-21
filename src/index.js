<<<<<<<<< Temporary merge branch 1
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
=========
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
>>>>>>>>> Temporary merge branch 2

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
<<<<<<<<< Temporary merge branch 1
    <App />
=========
    <BrowserRouter>
      <App />
    </BrowserRouter>
>>>>>>>>> Temporary merge branch 2
  </React.StrictMode>
);
