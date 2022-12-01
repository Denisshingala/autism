import "./App.css";
import React from "react";
import { Routes, Route } from "react-router";
import Login from "./pages/Login-SignUp/Login";
import Signup from './pages/Login-SignUp/Signup'
import Games from './pages/Games/Games'
import GamesDetails from './pages/GameDetails/GameDetails'
import Dummy from "./pages/Dummy";
import Home from "./pages/Home/Home";
// import Login from "./pages/Login";
import HomeComponent from "./components/Home/HomeComponent";
import Game from "./components/Game";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/game" element={<Game />} />
    </Routes>
  );
}
export default App;
