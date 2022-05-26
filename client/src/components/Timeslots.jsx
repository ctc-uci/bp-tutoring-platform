/* eslint-disable new-cap */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react';
import './Timeslots.css';
import moment from 'moment';

function TimeSlots({ selected, setSelected }) {
  const [timeSlots, setTimeSlots] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const createTimeSlots = (fromTime, toTime) => {
    const startTime = moment(fromTime, 'hh:mm A');
    const endTime = moment(toTime, 'hh:mm A');
    if (endTime.isBefore(startTime)) {
      endTime.add(1, 'day');
    }
    const arr = [];
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
        <i className="arrow down" />
      </div>
      {isActive && (
        <div className="times-list">
          {timeSlots.map((item, key) => (
            <div
              onClick={_ => {
                setSelected(item);
                setIsActive(false);
              }}
              className="time"
              key={item}
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
