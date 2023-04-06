import React, { useState } from "react";
import './Style/form.css'
import {matches, leagues} from './constant'
import { useNavigate } from 'react-router-dom';


const AddSchedule = () => {
  const [dateValue, setDate] = useState(new Date());
  const [League, setLeague] = useState("LEC");
  const [Red, setRed] = useState("");
  const [Blue, setBlue] = useState("");
  const [Rounds, setRounds] = useState("");
  const leagueOptions = [];
  const sideOptions = leagues[League]["teams"] || [];

  const hist = useNavigate();

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
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const datetime = new Date(dateValue);
    const match = {
      'date': datetime,
      'league' : League,
      'stat' : Rounds,
      'red' : Red,
      'blue' : Blue,
      'weekday' : weekdays[datetime.getDay()],
      'monthday' : `${datetime.getDate()} ${months[datetime.getMonth()]}`,
      'hour' : datetime.getHours().toString(10).padStart(2, '0'),
      'minute' : datetime.getMinutes().toString(10).padStart(2, '0')
    }
    
    if(match['red'] === match['blue'])
      return false
    
    for(const i in match)
      if(match[i] === '')
        return false
    matches.push(match);
    hist('/schedule')
    return true;
  };

  for(const lg in leagues){

    leagueOptions.push(<option key={lg} value={lg}>{lg}</option>);
  }


  return (

    <div className='all-parent'>
      <div className='all'>
        <div className="form">

            <form onSubmit={handleSubmit}>
                <div className="form-input">
                    Date and Time:
                    <input type="datetime-local" value={dateValue} onChange={handleDateChange}  />
                </div>
                <div className="form-input">
                    League:
                    <select value={League} onChange={handleLeagueChange}>
                    {/* <option value="">Select an option</option> */}
                    { leagueOptions}
                    </select>
                </div>
                <div className="form-input">
                    Red Side:
                    <select value={Red} onChange={handleRedChange}>
                    <option value="">Select an option</option>
                    {sideOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
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
                      <option key={option} value={option}>
                        {option}
                      </option>
                      ))
                    }
                    </select>
                </div>
                <div className="form-input">
                    Rounds:
                    <select value={Rounds} onChange={handleRoundsChange}>
                    <option value="">Select an option</option>
                    <option value="Best of 1">Best of 1</option>
                    <option value="Best of 3">Best of 3</option>
                    <option value="Best of 5">Best of 5</option>
                    </select>
                </div>
                <div className="form-submit">
                    <button id='form-submit' type='submit'/>
                </div>
            </form>

        </div>
      </div>
    </div>
  );
}

export default AddSchedule