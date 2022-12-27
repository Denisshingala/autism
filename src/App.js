import "./App.css";
import React from "react";
import { Routes, Route } from "react-router";
import Login from "./pages/Login-SignUp/Login";
import Signup from "./pages/Login-SignUp/Signup";
import Home from "./pages/Home/Home";
import Pricing from "./pages/Pricing/Pricing";
import Game from "./pages/Game";
import Dashboard from "./pages/Dashboard/Dashboard";
import Games from "./pages/Games/Games";
import Dummy from "./pages/Dummy";
import { BrowserRouter } from "react-router-dom";
import ConfirmSignUp from "./pages/Login-SignUp/ConfirmSignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/confirm" element={<ConfirmSignUp />} />
        <Route exact path="/games" element={<Games />} />
        <Route exact path="/game" element={<Game />} />
        <Route exact path="/pricing" element={<Pricing />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/dummy" element={<Dummy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
