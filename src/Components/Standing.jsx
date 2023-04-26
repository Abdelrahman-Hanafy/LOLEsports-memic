import React, {useState, useEffect} from 'react'
import SideFliter from "./SideFliter";
import './Style/standing.css'
import { Link } from 'react-router-dom';

const Standing = ({leagueSelected, setLeagueSelected}) => {

  const teams = []
  const [leagueTeams,setLeagueTeams] = useState([])

  useEffect(()=>{
    if (leagueSelected !== '')
      fetch(`https://localhost:7091/api/leagues/teams?league=${leagueSelected}`,{
      })
      .then(response => response.json())
      .then(json => setLeagueTeams(json)).catch(e => console.log(e))
  },[leagueSelected])

  if(leagueSelected !==''){
    
    for(const i in leagueTeams){
      const team = leagueTeams[i]
      teams.push(
        <React.Fragment key={i}>
          <Link to="/teams" className="ranking">
            <div className="ordinal">{(+i+1).toString().padStart(2, '0')}</div>
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