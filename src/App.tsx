/* eslint-disable node/no-missing-import */

import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";

import "./App.css";

function App() {
  function empty() {
    return true;
  }
  empty();
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
