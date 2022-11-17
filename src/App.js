import "./App.css";
import React from "react";
import { Routes, Route } from "react-router";
import Login from "./pages/Login";
import HomeComponent from "./components/Home/HomeComponent";
import Games from "./pages/Games/Games";
import Signup from "./pages/Signup";
import Dummy from "./pages/Dummy";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomeComponent />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/game" element={<Games />} />
        <Route exact path="/dummy" element={<Dummy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
