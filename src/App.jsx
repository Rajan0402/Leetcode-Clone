import React from "react";
import Navbar from './components/navbar/Navbar';
import HomePage from "./pages/home/HomePage";
import Problems from "./pages/problem/Problems";
import ProblemsAll from "./pages/problemsAll/ProblemsAll";
import Login from './components/login/Login'
import Signup from './components/signup/Signup'
import Contest from './pages/contest/Contest'
import Explore from './pages/explore/explore'
import './app.css';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<div><Navbar/><HomePage/></div>} ></Route>
          <Route path="/problemsAll" element={<ProblemsAll />} ></Route>
          <Route path="/contest" element={<Contest/>} ></Route>
          <Route path="/explore" element={<Explore/>} ></Route>
          <Route path="/login" element={<Login/>} ></Route>
          <Route path="/signup" element={<Signup/>} ></Route>
          <Route path="/problem/:pid/" element={<Problems/>} ></Route>
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App