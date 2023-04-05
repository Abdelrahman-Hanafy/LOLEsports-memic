import React, { useState } from "react";
import './Style/form.css'


const AddSchedule = () => {
  const [dateValue, setDate] = useState(new Date());
  const [dropdown1, setDropdown1] = useState("");
  const [dropdown2, setDropdown2] = useState("");
  const [dropdown3, setDropdown3] = useState("");
  const [dropdown4, setDropdown4] = useState("");

  const handleDateChange = (date) => {
    const datetime = date.target.value;
    // console.log(atetime);
    setDate(datetime);
  };

  const handleDropdown1Change = (event) => {
    setDropdown1(event.target.value);
  };

  const handleDropdown2Change = (event) => {
    setDropdown2(event.target.value);
  };

  const handleDropdown3Change = (event) => {
    setDropdown3(event.target.value);
  };

  const handleDropdown4Change = (event) => {
    setDropdown4(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data
  };

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
                    <select value={dropdown1} onChange={handleDropdown1Change}>
                    <option value="">Select an option</option>
                    <option value="option1">Arbian League</option>
                    <option value="option2">LEC</option>
                    <option value="option3">LCK</option>
                    </select>
                </div>
                <div className="form-input">
                    Red Side:
                    <select value={dropdown2} onChange={handleDropdown2Change}>
                    <option value="">Select an option</option>
                    <option value="option1">T1</option>
                    <option value="option2">RAAD</option>
                    <option value="option3">GnG</option>
                    </select>
                </div>
                <div className="form-input">
                    Blue Side:
                    <select value={dropdown3} onChange={handleDropdown3Change}>
                    <option value="">Select an option</option>
                    <option value="option1">Triple</option>
                    <option value="option2">Mad Liones</option>
                    <option value="option3">Funtic</option>
                    </select>
                </div>
                <div className="form-input">
                    Rounds:
                    <select value={dropdown4} onChange={handleDropdown4Change}>
                    <option value="">Select an option</option>
                    <option value="option1">Best of 1</option>
                    <option value="option2">Best of 3</option>
                    <option value="option3">Best of 5</option>
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