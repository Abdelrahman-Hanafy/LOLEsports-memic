import React from 'react'
import './rewards.css'
import rewards from '../assets/rewards.png'

const Rewards = () => {
  return (
    <div className='content  with-out'>
      <div className="RewardsStartEarning">
        <div className="text">
          <div className="title">Watch Games. Earn Drops and Rewards.</div>
          <div className="body">Earn exclusive icons, emotes, and other loot. To get started, we need to track your watch patterns to give you rewards and drops. View our privacy policy. </div>
        </div>
        <div className="image">
          <img src={rewards} alt=''/>
        </div>
      </div>
    </div>
    
  )
}

export default Rewards