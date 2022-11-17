import "./App.css";
import React from "react";
import { Routes, Route } from "react-router";
import Login from "./pages/Login";
import HomeComponent from "./components/Home/HomeComponent";
import Games from "./pages/Games/Games";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HomeComponent />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/game" element={<Games />} />
    </Routes>
  );
}

export default App;
