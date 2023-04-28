import React, {useEffect, useState} from 'react'
import SideFliter from "./SideFliter";
import {Link} from 'react-router-dom'
import './Style/schedule.css'
// import {matches} from './constant'

const Schedule = ({leagueSelected, setLeagueSelected}) => {

  const [sideOptions, SetSideOptions] = useState([]);
  const [matches, setMatches] = useState([]); 

  useEffect( ()=>{
    // console.log("change")
    if (leagueSelected !== ''){
      fetch(`https://localhost:7091/api/leagues/matches?league=${leagueSelected}`,{
      })
      .then(response => response.json())
      .then(json => {setMatches(json); })
      .catch(e => console.log(e))
    }
  },[leagueSelected])

  useEffect( ()=>{
    
    if (leagueSelected !== ''){

      fetch(`https://localhost:7091/api/leagues/teams?league=${leagueSelected}`,{
      })
      .then(response => response.json())
      .then(json => {SetSideOptions(json); console.log("change");})
      .catch(e => console.log(e))
    }
  },[leagueSelected])


  const matchesList = [];
  
  // console.log(sideOptions)
  if (leagueSelected !== ''){

    for(const match of matches)
    {
      // const match = matches[m];
      const blue = sideOptions.filter(item => item.id === match["blueID"])[0]
      const red = sideOptions.filter(item => item.id === match["redID"])[0]
      // console.log(match);
      // console.log(blue,red);
      // console.log(sideOptions)
      console.log("change2");
      
        matchesList.push(
        <React.Fragment key={`${match['id']}`}>
        {/* <div  className="EventDate">
          <div className="date">
            <span className="weekday">{match['weekday']}</span>
            <span className="dash">–</span>
            <span className="monthday">{match['monthday']}</span>
          </div>
        </div> */}
        <div className="EventMatch">
          <div className="single future event">
            {/* <div className="EventTime">
              <div className="time">
                <span className="hour">{match['hour']}</span>
                <span className="minute">{match['minute']}</span>
                <span className="approx">APPROX</span>
              </div>
            </div> */}
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
            {/* <div role="button" className="league"><div className="name">{match['league']}</div>
              <div className="strategy">{match['stat']}</div>
            </div> */}
          </div>
        </div>
        </React.Fragment>
        );
    }
  }  


  return (
    <>
      <SideFliter setLeagueSelected={setLeagueSelected} />
      <div className='content'>
        <div className="title">Schedule</div>
        <Link to='/AddMatch' >
                <button className="btn btn-outline-Secondary " type="button">Add Match</button>
        </Link>

        {matchesList}
      </div>

    </>

  )
}

export default Schedule