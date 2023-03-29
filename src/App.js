import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./app.css";
import Home from "./Components/Home";

import Navbar from "./Components/Navbar/Navbar";
import Schedule from "./Components/Schedule";
import Standing from "./Components/Standing";
import Rewards from "./Components/Rewards";
import Login from "./Components/Login";
import Loading from "./Components/Loading";

const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <div className="container ">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/schedule" element={<Schedule />}></Route>
              <Route path="/standings" element={<Standing />}></Route>
              <Route path="/rewards" element={<Rewards />}></Route>
              <Route path="/login" element={<Login />}></Route>
            </Routes>
          </div>
        </>
      )}
    </>
  );
};

export default App;
