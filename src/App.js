import "./App.css";
import React from "react";
import { Routes, Route } from "react-router";
import Login from "./pages/Login-Signup/Login";
import Signup from "./pages/Login-Signup/Signup";
import HomeComponent from "./components/Home/HomeComponent";
import Game from "./components/Game";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HomeComponent />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/game" element={<Game />} />
    </Routes>
  );
}

export default App;
