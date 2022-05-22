import React, { useEffect, useState } from 'react';
import './TimeSlots.css';
import moment from 'moment';

function TimeSlots({ selected, setSelected }) {
  const [timeSlots, setTimeSlots] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const createTimeSlots = (fromTime, toTime) => {
    let startTime = moment(fromTime, 'hh:mm A');
    let endTime = moment(toTime, 'hh:mm A');
    if (endTime.isBefore(startTime)) {
      endTime.add(1, 'day');
    }
    let arr = [];
    while (startTime <= endTime) {
      arr.push(new moment(startTime).format('hh:mm A'));
      startTime.add(30, 'minutes');
    }
    return arr;
  };
  useEffect(() => {
    setTimeSlots(createTimeSlots('12:00 AM', '24:00 AM'));
  }, []);

  return (
    <div className="time-slots">
      <div className="time-slots-btn" onClick={e => setIsActive(!isActive)}>
        {selected}
        <i className="arrow down"></i>
      </div>
      {isActive && (
        <div className="times-list">
          {timeSlots.map((item, key) => (
            <div
              onClick={e => {
                setSelected(item);
                setIsActive(false);
              }}
              className="time"
              key={key}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TimeSlots;
