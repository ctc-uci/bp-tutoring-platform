import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Modal.css';
import TimeSlots from './TimeSlots';
import axios from 'axios';

function Modal({ closeModal, month, day, year }) {
  let navigate = useNavigate();
  const [startSelected, setStartSelected] = useState('Select Time:');
  const [endSelected, setEndSelected] = useState('Select Time:');

  // const handleSubmit = async (timeSlot, email) => {
  //   const res = await axios.post('http://localhost:3001/timeslots', {
  //     time-slots: [timeSlot],
  //     email: email
  //   });
  //   if (res.status === 200)
  //     alert('Time slot successfully created')
  //   else
  //     alert('Time slot creation failed')

  return (
    <div className="modalBG">
      <div className="modalContainer">
        <div className="head">
          <div className="title">
            <h1>
              Time Selection: {month}/{day}/{year}
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
              navigate('/confirm', {
                state: {
                  date: [month, day, year],
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
}

export default Modal;
