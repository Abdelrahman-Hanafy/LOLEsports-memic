import React from "react";
import "./app.css";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Champs from "./Components/Champs/Champs";
import Teams from "./Components/Teams/Teams";
const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/Champs" element={<Champs></Champs>}></Route>
          <Route path="/Teams" element={<Teams></Teams>}></Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
