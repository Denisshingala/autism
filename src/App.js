import "./App.css";
import React from "react";
import { Routes, Route } from "react-router";
import Login from "./pages/Login";
import HomeComponent from "./components/Home/HomeComponent";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HomeComponent />} />
      <Route exact path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
