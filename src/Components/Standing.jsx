import React from 'react'
import SideFliter from "./SideFliter";
import './Style/standing.css'
import { Link } from 'react-router-dom';
import {leagues} from './constant'

const Standing = ({leagueSelected, setLeagueSelected}) => {

  const teams = []
  if(leagueSelected !== 'clear' && leagueSelected !==''){
    for(const i in leagues[leagueSelected]['teams']){
      const team = leagues[leagueSelected]['teams'][i]
      teams.push(
        <React.Fragment key={team['standing']}>
          <Link to="/teams" className="ranking">
            <div className="ordinal">{team['standing']}</div>
              <div className="team">
                <div className="team-logo">
                  <img src={team['logo']} className="logo" alt="" />
                </div>
              <div className="team-info">
                <div className="name">{team['name']}</div>
                <div className="record">{team['win']}W-{team['lose']}L</div>
              </div>
            </div>
          </Link>
        </React.Fragment>
      )
    }
    
  }

  return (
    <>
    <SideFliter setLeagueSelected={setLeagueSelected} />
    <div className='content'>
      <div className="title">Standings</div>
      {teams}
    </div>
    
</>
  )
}

export default Standing