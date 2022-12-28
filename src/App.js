import "./App.css";
import React from "react";
import { Routes, Route } from "react-router";
import Login from "./pages/Login-SignUp/Login";
import Signup from "./pages/Login-SignUp/Signup";
import Home from "./pages/Home/Home";
import Pricing from "./pages/Pricing/Pricing";
import Dashboard from "./pages/Dashboard/Dashboard";
import Games from "./pages/Games/Games";
import { BrowserRouter } from "react-router-dom";
import ComingSoon from "./pages/ComingSoon/ComingSoon";
import GamesData from "./utils/GamesData";
import GamesBody from "./components/GamesBody/GamesBody";
import Levels from "./components/Levels/Levels";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/games" element={<Games />} >
          <Route exact path="" element={<GamesBody />} />
        </Route>
        <Route exact path="/games/:gameTitle" element={<GamesData />} ></Route>
        <Route exact path="/pricing" element={<Pricing />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/comingsoon" element={<ComingSoon />} />
        <Route exact path="/levels" element={<Levels />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
