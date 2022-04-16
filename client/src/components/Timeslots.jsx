import React, { useState } from 'react';
import './Timeslots.css';

function Timeslots({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const times = ['Test Time 1', 'Test Time 2', 'Test Time 3'];
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
