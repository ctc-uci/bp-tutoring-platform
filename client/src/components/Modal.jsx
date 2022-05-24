import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Modal.css';
import TimeSlots from './TimeSlots';
import axios from 'axios';

const Modal = ({ closeModal, date }) => {
  let navigate = useNavigate();
  const [startSelected, setStartSelected] = useState('Select Time:');
  const [endSelected, setEndSelected] = useState('Select Time:');

  const scheduleTimeslot = async (timeslots, email) => {
    const res = await axios.post('http://localhost:3001/timeslots', {
      timeslots,
      email,
    });
    if (res.status === 200) {
      alert('Time slot successfully created');
    } else {
      alert('Time slot creation failed');
    }
  };

  return (
    <div className="modalBG">
      <div className="modalContainer">
        <div className="head">
          <div className="title">
            <h1>
              Time Selection: {date.month}/{date.date}/{date.year}
            </h1>
          </div>
          <div className="closeButton">
            <button onClick={() => closeModal(false)}> X </button>
          </div>
        </div>
        <div className="body">
          <div className="time-slots">
            <p>Session Start:</p>
            <TimeSlots selected={startSelected} setSelected={setStartSelected} />
          </div>
          <div className="time-slots">
            <p>Session End:</p>
            <TimeSlots selected={endSelected} setSelected={setEndSelected} />
          </div>
        </div>
        <div className="foot">
          <button onClick={() => closeModal(false)}>BACK</button>
          <button
            onClick={() => {
              // Seconds after epoch
              // Date.getTime() should return this
              // convert starttime and endtime converted to js date objects
              let startDate = new Date(date.getTime());
              let endDate = new Date(date.getTime());
              let startHr = Number(startSelected.substr(0, 2));
              if (startSelected.substr(6, 2) === 'PM') {
                // 12:xx pm is middle of day
                if (startHr != 12) {
                  startHr += 12;
                }
              } else {
                // 12:xx am is beginning of day
                if (startHr === 12) {
                  startHr = 0;
                }
              }
              const startMinutes = Number(startSelected.substr(3, 2));
              let endHr = Number(endSelected.substr(0, 2));
              if (endSelected.substr(6, 2) === 'PM') {
                // 12:xx pm is middle of day
                if (endHr != 12) {
                  endHr += 12;
                }
              } else {
                // 12:xx am is beginning of day
                if (endHr === 12) {
                  endHr = 0;
                }
              }
              const endMinutes = Number(endSelected.substr(3, 2));

              startDate.setHours(startHr);
              startDate.setMinutes(startMinutes);
              endDate.setHours(endHr);
              endDate.setMinutes(endMinutes);

              console.log(startDate);
              console.log(startDate.getTime());
              console.log(endDate);
              console.log(endDate.getTime());

              let listOfTimeSlots = [];
              let clockIterator = new Date(startDate.getTime());
              while (clockIterator.getTime() != endDate.getTime()) {
                listOfTimeSlots.push(clockIterator.getTime());
                clockIterator.setTime(clockIterator.getTime() + 1800000);
              }

              scheduleTimeslot(listOfTimeSlots, 'placeholder email');
              navigate('/confirm', {
                state: {
                  date: [date.month, date.day, date.year],
                  startTime: startSelected,
                  endTime: endSelected,
                },
              });
            }}
          >
            CONTINUE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
