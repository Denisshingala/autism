import "./App.css";
import React from "react";
import { Routes, Route } from "react-router";
<<<<<<< HEAD
import Login from "./pages/Login-SignUp/Login";
import Signup from "./pages/Login-SignUp/Signup";
import Home from "./pages/Home/Home";
import Games from "./pages/Games/Games";
import Dummy from "./pages/Dummy";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/games" element={<Games />} />
        <Route exact path="/dummy" element={<Dummy />} />
      </Routes>
    </BrowserRouter>
  )
=======
import Login from "./pages/Login";
import HomeComponent from "./components/Home/HomeComponent";
import Game from "./components/Game";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HomeComponent />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/game" element={<Game />} />
    </Routes>
  );
>>>>>>> e033f60f50742a400823d3b94a98a57f24114016
}

export default App;
