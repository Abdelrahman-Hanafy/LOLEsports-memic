import React from 'react'
import SideFliter from "./SideFliter";
import './schedule.css'

const Schedule = () => {
  return (
    <>
      <SideFliter />
      <div className='content'>
        {/* <h1>Schedule</h1> */}
        <div className="EventDate">
          <div className="date">
            <span className="weekday">Today</span>
            <span className="dash">–</span>
            <span className="monthday">30 March</span>
          </div>
        </div>
        <div className="EventMatch">
          <div className="single future event">
            <div className="EventTime">
              <div className="time">
                <span className="hour">20</span>
                <span className="minute">00</span>
                <span className="approx">APPROX</span>
              </div>
            </div>
            <div className="teams">
              <div className="team team1">
                <img src="https://am-a.akamaihd.net/image?resize=140:&amp;f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1676278903430_FullcolorTransparent1.png" className="" alt="" />
                <div className="team-info">
                  <h2>
                    <span className="tricode">RAAD</span>
                  </h2>
                </div>
              </div>
              <div className="versus">VS </div>
              <div className="team team2">
                <img src="https://am-a.akamaihd.net/image?resize=140:&amp;f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1673830053328_Geekay_Esports-logo.png" className="" alt="" />
                <div className="team-info">
                  <h2>
                    
                    <span className="tricode">GK</span>
                  </h2>
                </div>
              </div>
            </div>
            <div role="button" className="league"><div className="name">Arabian League</div>
              <div className="strategy">best of&nbsp;5</div>
            </div>
            </div>
        </div>

        <div className="EventDate">
          <div className="date">
            <span className="weekday">Saturday</span>
            <span className="dash">–</span>
            <span className="monthday">1 April</span>
          </div>
        </div>
        <div className="EventMatch">
          <div className="single future event">
            <div className="EventTime">
              <div className="time">
                <span className="hour">8</span>
                <span className="minute">00</span>
                <span className="approx">APPROX</span>
              </div>
            </div>
            <div className="teams">
              <div className="team team1">
                <img src="https://am-a.akamaihd.net/image?resize=140:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1655210113163_GenG_logo_200407-05.png" className="" alt="" />
                <div className="team-info">
                  <h2>
                    <span className="tricode">GEN</span>
                  </h2>
                </div>
              </div>
              <div className="versus">VS </div>
              <div className="team team2">
                <img src="https://am-a.akamaihd.net/image?resize=140:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1631819523085_t1-2021-worlds.png" className="" alt="" />
                <div className="team-info">
                  <h2>
                    
                    <span className="tricode">T1</span>
                  </h2>
                </div>
              </div>
            </div>
            <div role="button" className="league"><div className="name">LCK</div>
              <div className="strategy">best of&nbsp;5</div>
            </div>
            </div>
        </div>
      
      
      </div>

    </>

  )
}

export default Schedule