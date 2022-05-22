import React, { useState } from 'react';
import axios from 'axios';
import './Timeslots.css';


function Timeslots({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const times = ['1:00', '2:00', '3:00'];

  CreateTimeslot(times[0], "failedemail@uci.edu")

  const CreateTimeslot = async (timeslot, email) => {
    const res = await axios.post('http://localhost:3001/timeslots', {
      timeslots: [timeslot],
      email: email
    });
    if (res.status === 200)
      alert('Timeslot successfully created')
    else
      alert('Timeslot creation failed')
  }

  return (
    <div className="timeslots">
      <div className="timeslots-btn" onClick={e => setIsActive(!isActive)}>
        {selected}
        <i class="arrow down"></i>
      </div>
      {isActive && (
        <div className="times-list">
          {times.map(times => (
            <div
              onClick={e => {
                setSelected(times);
                setIsActive(false);
              }}
              className="time"
            >
              {times}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Timeslots;
