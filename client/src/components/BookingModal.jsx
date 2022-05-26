/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BookingModal.css';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

const BookingModal = ({ closeModal, date }) => {
  const navigate = useNavigate();
  const [timeSlots, setTimeSlots] = useState([]);
  useEffect(async () => {
    try {
      const res = await axios.get(`http://localhost:3001/timeslots/${'placeholder email'}`);
      const { data } = res;
      setTimeSlots(
        data
          .map(tss => tss.timeslots.map(t => [tss.email, t]))
          .reduce((a, b) => [...a, ...b])
          .filter(ts => date.getTime() <= ts[1] && ts[1] <= date.getTime() + 24 * 60 * 60 * 1000),
      );
    } catch (err) {
      console.log('unable to get timeslots');
    }
  }, []);

  const convertUnixTime = unixTime => {
    return moment(new Date(unixTime)).format('h:mm A');
  };

  const bookTimeSlot = async (startTime, endTime, note) => {
    await axios.post('http://localhost:3001/appointments', {
      startTime,
      endTime,
      note,
    });
  };

  return (
    <div className="modalBG">
      <div className="modalContainer">
        <div className="head">
          <div className="title">
            <h1>
              Book a Time Slot: {date.getMonth() + 1}/{date.getDate()}/{date.getFullYear()}
            </h1>
          </div>
          <div className="closeButton">
            <button type="button" onClick={closeModal}>
              {' '}
              X{' '}
            </button>
          </div>
        </div>
        <div className="times">
          {timeSlots.map((time, key) => (
            <div className="time-block">
              <div className="date">
                {date.getMonth() + 1}/{date.getDate()}
              </div>
              <div className="time">
                {convertUnixTime(time[1])} - {convertUnixTime(time[1] + 1800000)}
              </div>
              <button
                type="button"
                className="book-button"
                onClick={() => {
                  bookTimeSlot(Number(time[1]), Number(time[1] + 1800000), 'placeholder name');
                  navigate('/booking-confirm');
                }}
              >
                BOOK
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
