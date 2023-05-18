import React, {useEffect, useState} from 'react'
import SideFliter from "./SideFliter";
import {Link} from 'react-router-dom'
import './Style/schedule.css'
import axios from 'axios';

const Schedule = ({leagueSelected, setLeagueSelected}) => {

  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const types = ["Best of 1","Best of 3","Best of 5"]

  const [sideOptions, SetSideOptions] = useState([]);
  const [matches, setMatches] = useState([]); 

  useEffect( ()=>{
    if (leagueSelected === ''){
      SetSideOptions([]);
      setMatches([]);
      return;
    }

    const fetchTeams = async () =>{
      const resTeam = await axios.get(`https://localhost:7091/api/leagues/teams?league=${leagueSelected}`,{})
      const JsonTeam = await resTeam.data;
      const resMatch = await axios.get(`https://localhost:7091/api/leagues/matches?league=${leagueSelected}`,{})
      const JsonMatch = await resMatch.data;
      
      
      
      await SetSideOptions(JsonTeam) 
      await setMatches(JsonMatch)
    }
    fetchTeams();


  },[leagueSelected])


  const matchesList = matches.map(match => {
    const blue = sideOptions.filter(item => item.id === match["blueID"])[0];
    const red = sideOptions.filter(item => item.id === match["redID"])[0];
    const datetime = new Date(match["time"]);
      return (
      <>
        <div  className="EventDate">
          <div className="date">
            <span className="weekday">{weekdays[datetime.getDay()]}</span>
            <span className="dash">–</span>
            <span className="monthday">{`${datetime.getDate()} ${months[datetime.getMonth()]}`}</span>
          </div>
        </div>
        <div className="EventMatch" key={match['id']}>
          <div className="single future event">
            <div className="EventTime">
              <div className="time">
                <span className="hour">{datetime.getHours().toString(10).padStart(2, '0')}</span>
                <span className="minute">{datetime.getMinutes().toString(10).padStart(2, '0')}</span>
                <span className="approx">APPROX</span>
              </div>
            </div>
            <div className="teams">
              <div className="team team1">
                <img src={blue['logo']} className="" alt="" />
                <div className="team-info">
                  <h2>
                    <span className="tricode">{blue['symbol']}</span>
                  </h2>
                </div>
              </div>
              <div className="versus">VS </div>
              <div className="team team2">
                <img src={red['logo']} className="" alt="" />
                <div className="team-info">
                  <h2>
                    <span className="tricode">{red['symbol']}</span>
                  </h2>
                </div>
              </div>
            </div>
            <div role="button" className="league"><div className="name">{match['league']}</div>
              <div className="strategy">{types[match['type']]}</div>
            </div>
          </div>
        </div>
      </>
      );
    });



  return (
    <>
      <SideFliter setLeagueSelected={setLeagueSelected} />
      <div className='content withSide'>
        <div className="title-container">
          <div className="title">Schedule</div>
          <Link to='/AddMatch' >
            { window.sessionStorage.getItem("loggedUser")? <button className="btn btn-outline-Secondary " type="button">Add Match</button>:""}
          </Link>
        </div>
        {matchesList}
      </div>

    </>

  )
}

export default Schedule