import React, { useState } from 'react';
import './Modal.css';
import Timeslots from './Timeslots';
import { useNavigate } from 'react-router-dom';

function Modal({ closeModal, month, day, year }) {
  let navigate = useNavigate();
  const [startSelected, setStartSelected] = useState('Select Time:');
  const [endSelected, setEndSelected] = useState('Select Time:');
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
          <div className="timeslots">
            <p>Session Start:</p>
            <Timeslots selected={startSelected} setSelected={setStartSelected} />
            <p>Session End:</p>
            <Timeslots selected={endSelected} setSelected={setEndSelected} />
          </div>
        </div>
        <div className="foot">
          <button onClick={() => closeModal(false)}>BACK</button>
          <button
            onClick={() => {
              navigate('/confirm');
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
