/* eslint-disable no-restricted-syntax */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookingModal = ({ closeModal, date }) => {
  const [timeslots, setTimeslots] = useState([]);
  useEffect(async () => {
    console.log(date);
    setTimeslots([]);
    const res = await axios.get(`http://localhost:3001/timeslots/${'placeholder email'}`);
    if (res.status === 200) {
      //   console.log(res.data);
      console.log(date.getTime());
      console.log(date.getTime() + 24 * 60 * 60 * 1000);
      res.data.forEach(async timeSlotsObject => {
        for (const timeslot in timeSlotsObject.timeslots) {
          if (
            date.getTime() <=
            timeSlotsObject.timeslots[timeslot] <=
            date.getTime() + 24 * 60 * 60 * 1000
          ) {
            const foundTimeslot = timeSlotsObject.timeslots[timeslot];
            setTimeslots([...timeslots, foundTimeslot]);
          }
        }
      });
      console.log(timeslots);
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
              Time Selection: {date.month}/{date.date}/{date.year}
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
