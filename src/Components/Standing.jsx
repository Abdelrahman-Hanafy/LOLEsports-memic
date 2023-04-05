import React from 'react'
import SideFliter from "./SideFliter";
import './Style/standing.css'
import { Link } from 'react-router-dom';

const Standing = () => {
  return (
    <>
    <SideFliter />
    <div className='content'>
      <div className="title">Standings</div>
      <Link to="/teams" className="ranking">
        <div className="ordinal">1</div>
          <div className="team">
            <div className="team-logo">
              <img src="https://am-a.akamaihd.net/image?resize=140:&amp;f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1641292031788_Team_BDSlogo_square.png" className="logo" alt="" />
            </div>
          <div className="team-info">
            <div className="name">Team BDS</div>
            <div className="record">7W-2L</div>
          </div>
        </div>
      </Link>
      <Link to="/teams" className="ranking">
        <div className="ordinal">2</div>
          <div className="team">
            <div className="team-logo">
              <img src="https://am-a.akamaihd.net/image?resize=140:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2FG2-FullonDark.png" className="logo" alt="" />
            </div>
          <div className="team-info">
            <div className="name">G2 Esports</div>
            <div className="record">6W-3L</div>
          </div>
        </div>
      </Link>
      <Link to="/teams" className="ranking">
        <div className="ordinal">3</div>
          <div className="team">
            <div className="team-logo">
              <img src="https://am-a.akamaihd.net/image?resize=140:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1631819669150_fnc-2021-worlds.png" className="logo" alt="" />
            </div>
          <div className="team-info">
            <div className="name">Fnatic</div>
            <div className="record">6W-3L</div>
          </div>
        </div>
      </Link>
    </div>
    
</>
  )
}

export default Standing