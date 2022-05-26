/* eslint-disable no-lonely-if */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SchedulingModal.css';
import axios from 'axios';
import TimeSlots from './TimeSlots';

const SchedulingModal = ({ closeModal, date }) => {
  const navigate = useNavigate();
  const [startSelected, setStartSelected] = useState('Select Time:');
  const [endSelected, setEndSelected] = useState('Select Time:');

  const scheduleTimeSlot = async (timeslots, email) => {
    await axios.post('http://localhost:3001/timeslots', {
      timeslots,
      email,
    });
  };

  return (
    <div className="modalBG">
      <div className="modalContainer">
        <div className="head">
          <div className="title">
            <h1>
              Create Availability: {date.getMonth() + 1}/{date.getDate()}/{date.getFullYear()}
            </h1>
          </div>
          <div className="closeButton">
            <button type="button" onClick={closeModal}>
              {' '}
              X{' '}
            </button>
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
          <button type="button" onClick={closeModal}>
            BACK
          </button>
          <button
            type="button"
            hidden={!(startSelected !== 'Select Time:' && endSelected !== 'Select Time:')}
            onClick={() => {
              // Seconds after epoch
              // Date.getTime() should return this
              // convert starttime and endtime converted to js date objects
              const startDate = new Date(date.getTime());
              const endDate = new Date(date.getTime());
              let startHr = Number(startSelected.substr(0, 2));
              if (startSelected.substr(6, 2) === 'PM') {
                // 12:xx pm is middle of day
                if (startHr !== 12) {
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
                if (endHr !== 12) {
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

              const listOfTimeSlots = [];
              const clockIterator = new Date(startDate.getTime());
              while (clockIterator.getTime() !== endDate.getTime()) {
                listOfTimeSlots.push(clockIterator.getTime());
                clockIterator.setTime(clockIterator.getTime() + 1800000);
              }
              console.log(date.getMonth());
              scheduleTimeSlot(listOfTimeSlots, 'placeholder email');

              navigate('/scheduling-confirm', {
                state: {
                  dateArray: [date.getMonth(), date.getDay(), date.getYear()],
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

export default SchedulingModal;
