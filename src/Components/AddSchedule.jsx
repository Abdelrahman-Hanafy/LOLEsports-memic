import React, { useState, useEffect } from "react";
import './Style/form.css'
import { useNavigate } from 'react-router-dom';
import {get, authPost} from './APIMiddleware'

const AddSchedule = () => {
  const [dateValue, setDate] = useState(new Date());
  const [League, setLeague] = useState(1);
  const [Red, setRed] = useState("");
  const [Blue, setBlue] = useState("");
  const [Rounds, setRounds] = useState("");
  const [leagueOptions, setLeagueOptions ] = useState([]);
  const [sideOptions, SetSideOptions] = useState([]);

  const hist = useNavigate();
  useEffect(() => {
    get("leagues").then(res => setLeagueOptions(res))
  }, []);

  useEffect(()=>{
    if (League !== '')
      get(`leagues/teams?league=${League}`).then(res => SetSideOptions(res))
  
  },[League])

  const handleDateChange = (date) => {
    const datetime = date.target.value;
    setDate(datetime);
  };

  const handleLeagueChange = (event) => {
    setLeague(event.target.value);
  };

  const handleRedChange = (event) => {
    setRed(event.target.value);
  };

  const handleBlueChange = (event) => {
    setBlue(event.target.value);
  };

  const handleRoundsChange = (event) => {
    setRounds(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data
    const datetime = new Date(dateValue);
    const match = {
      time: datetime,
      type : +Rounds,
      redID : +Red,
      blueID : +Blue,
      leagueId: +League,
      "blueScore": 0,
      "blueVote": 0,
      "redScore": 0,
      "redVote": 0

    }
    
    if(match['redID'] === match['blueID']){
      return false
    }
    
    for(const i in match){
      if(match[i] === ''){
      return false

      }
    }

    // console.log(match)
    authPost("Matches",match,window.sessionStorage.getItem("userToken"))

    hist('/schedule')
    return true;
  };

  const leagueList = [] // to display
  for(const lg in leagueOptions){
    // console.log(lg)
    leagueList.push(<option key={leagueOptions[lg]["id"]} value={leagueOptions[lg]["id"]}>{leagueOptions[lg]["name"]}</option>);
  }


  return (

    <div className='all-parent'>
      <div className='all'>

        <form onSubmit={handleSubmit}>
          <div className="form">
                <div className="form-input">
                    Date and Time:
                    <input type="datetime-local" value={dateValue} onChange={handleDateChange}  />
                </div>
                <div className="form-input">
                    League:
                    <select value={League} onChange={handleLeagueChange}>
                    {/* <option value="">Select an option</option> */}
                    { leagueList}
                    </select>
                </div>
                <div className="form-input">
                    Red Side:
                    <select value={Red} onChange={handleRedChange}>
                    <option value="">Select an option</option>
                    {sideOptions.map((option) => (
                      <option key={option['name']} value={option['id']}>
                        {option['name']}
                      </option>
                      ))
                    }
                    </select>
                </div>
                <div className="form-input">
                    Blue Side:
                    
                    <select value={Blue} onChange={handleBlueChange}>
                    <option value="">Select an option</option>
                    {sideOptions.map((option) => (
                      <option key={option['name']} value={option['id']}>
                        {option['name']}
                      </option>
                      ))
                    }
                    </select>
                </div>
                <div className="form-input">
                    Rounds:
                    <select value={Rounds} onChange={handleRoundsChange}>
                    <option value="">Select an option</option>
                    <option value="0">Best of 1</option>
                    <option value="1">Best of 3</option>
                    <option value="2">Best of 5</option>
                    </select>
                </div>
                <div className="form-submit">
                    <button id='form-submit' type='submit'/>
                </div>

          </div>
        </form>
        
      </div>
    </div>
  );
}

export default AddSchedule