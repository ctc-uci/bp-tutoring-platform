/* eslint-disable no-unused-vars */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookingModal = ({ closeModal, date }) => {
  const [timeslots, setTimeslots] = useState([]);
  useEffect(async () => {
    try {
      const res = await axios.get(`http://localhost:3001/timeslots/${'placeholder email'}`);
      const { data } = res;
      setTimeslots(
        data
          .map(tss => tss.timeslots.map(t => [tss.email, t]))
          .reduce((a, b) => [...a, ...b])
          .filter(ts => date.getTime() <= ts[1] && ts[1] <= date.getTime() + 24 * 60 * 60 * 1000),
      );
    } catch (err) {
      console.log('unable to get timeslots');
    }
    console.log(timeslots); // These are all in milliseconds after epoch, use native JS date object to convert
  }, []);

  return (
    <div className="modalBG">
      <div className="modalContainer">
        <div className="head">
          <div className="title">
            <h1>
              Time Selection: {date.getMonth() + 1}/{date.getDate()}/{date.getFullYear()}
            </h1>
          </div>
          <div className="closeButton">
            <button type="button" onClick={closeModal}>
              {' '}
              X{' '}
            </button>
          </div>
        </div>
        <div className="body">{/* Something goes here */}</div>
        <div className="foot">
          {/* <button onClick={() => closeModal(false)}>BACK</button>
          <button>CONTINUE</button> */}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
