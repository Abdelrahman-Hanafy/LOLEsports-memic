import React from 'react'
import SideFliter from "./SideFliter";
import {Link} from 'react-router-dom'
import './Style/schedule.css'
import {matches} from './constant'

const Schedule = ({leagueSelected, setLeagueSelected}) => {

  const matchesList = [];
  matches.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateA - dateB;
  });
  for(const m in matches)
  {
    const match = matches[m];
    if(match['league'] === leagueSelected || leagueSelected==='clear' || leagueSelected===''){
      matchesList.push(
      <React.Fragment key={`${match['monthday']}${match['blue']}${match['red']}`}>
      <div  className="EventDate">
        <div className="date">
          <span className="weekday">{match['weekday']}</span>
          <span className="dash">–</span>
          <span className="monthday">{match['monthday']}</span>
        </div>
      </div>
      <div className="EventMatch">
        <div className="single future event">
          <div className="EventTime">
            <div className="time">
              <span className="hour">{match['hour']}</span>
              <span className="minute">{match['minute']}</span>
              <span className="approx">APPROX</span>
            </div>
          </div>
          <div className="teams">
            <div className="team team1">
              <img src={require(`../assets/teams/${match['blue'].toLowerCase()}.png`)} className="" alt="" />
              <div className="team-info">
                <h2>
                  <span className="tricode">{match['blue']}</span>
                </h2>
              </div>
            </div>
            <div className="versus">VS </div>
            <div className="team team2">
              <img src={require(`../assets/teams/${match['red'].toLowerCase()}.png`)} className="" alt="" />
              <div className="team-info">
                <h2>
                  <span className="tricode">{match['red']}</span>
                </h2>
              </div>
            </div>
          </div>
          <div role="button" className="league"><div className="name">{match['league']}</div>
            <div className="strategy">{match['stat']}</div>
          </div>
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