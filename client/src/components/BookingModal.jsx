/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import axios from 'axios';

const BookingModal = ({ closeModal, date }) => {
  const timeslots = [];
  useEffect(async () => {
    const res = await axios.get(`http://localhost:3001/timeslots/${'placeholder email'}`);
    if (res.status === 200) {
      // really scuffed for loop and no useState for now, fix later
      for (const timeslotsObjectIndex in res.data) {
        for (const timeslotIndex in res.data[timeslotsObjectIndex].timeslots) {
          const timeslot = res.data[timeslotsObjectIndex].timeslots[timeslotIndex];
          if (date.getTime() <= timeslot && timeslot <= date.getTime() + 24 * 60 * 60 * 1000) {
            timeslots.push(timeslot);
          }
        }
      }
      console.log(timeslots); // These are all in milliseconds after epoch, use native JS date object to convert
    } else {
      console.log('unable to get timeslots');
    }
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
