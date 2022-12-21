<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
=======
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
>>>>>>> e033f60f50742a400823d3b94a98a57f24114016

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <App />
=======
    <BrowserRouter>
      <App />
    </BrowserRouter>
>>>>>>> e033f60f50742a400823d3b94a98a57f24114016
  </React.StrictMode>
);
