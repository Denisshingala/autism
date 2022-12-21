import "./App.css";
import React from "react";
import { Routes, Route } from "react-router";
import Login from "./pages/Login-SignUp/Login";
import Signup from './pages/Login-SignUp/Signup'
import Home from "./pages/Home/Home";
import Game from "./pages/Game";
import Games from "./pages/Games/Games";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/gameDetails" element={<Games />} />
      <Route exact path="/game" element={<Game />} />
      <Route exact path="/dashboard" element={<Dashboard/>} />
    </Routes>
  );
}
export default App;
