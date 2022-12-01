import "./App.css";
import React from "react";
import { Routes, Route } from "react-router";
import Login from "./pages/Login-SignUp/Login";
import Signup from './pages/Login-SignUp/Signup'
import Games from './pages/Games/Games'
import GamesDetails from './pages/GameDetails/GameDetails'
import Dummy from "./pages/Dummy";
import Home from "./pages/Home/Home";
function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Signup/>} />
      <Route exact path="/games" element={<Games />} />
      <Route exact path="/dummy" element={<Dummy />} />
      <Route exact path="/gameDetails" element={<GamesDetails />} />
    </Routes>
  );
}
export default App;
