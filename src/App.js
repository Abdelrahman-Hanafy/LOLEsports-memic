import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./app.css";

import Loading from "./Components/Loading";
import Navbar from "./Components/Navbar";

import Home from "./Components/Home";
import Schedule from "./Components/Schedule";
import Standing from "./Components/Standing";
import Rewards from "./Components/Rewards";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import AddSchedule from "./Components/AddSchedule";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [loggedUser, setloggedUser] = useState("");
  const [leagueSelected, setLeagueSelected] = useState("clear");

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
          <Navbar loggedUser={loggedUser} setloggedUser={setloggedUser} />
          <div className="container ">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route
                path="/schedule"
                element={
                  <Schedule
                    leagueSelected={leagueSelected}
                    setLeagueSelected={setLeagueSelected}
                  />
                }
              ></Route>
              <Route
                path="/standings"
                element={
                  <Standing
                    leagueSelected={leagueSelected}
                    setLeagueSelected={setLeagueSelected}
                  />
                }
              ></Route>
              <Route path="/rewards" element={<Rewards />}></Route>
              <Route
                path="/login"
                element={<Login setloggedUser={setloggedUser} />}
              ></Route>
              <Route path="/signup" element={<Signup />}></Route>
              <Route path="/AddMatch" element={<AddSchedule />}></Route>
            </Routes>
          </div>
        </>
      )}
    </>
  );
};

export default App;
