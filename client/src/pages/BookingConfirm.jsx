/* eslint-disable */
import React from 'react';
//import './BookingConfirm.css';
import { useNavigate, useLocation } from 'react-router-dom';

function BookingConfirm() {
  const navigate = useNavigate();
  const times = useLocation();
  return (
    <div className="confirmBG">
      <div className="confirmContainer">
        <div className="head">
          <h1>Success!</h1>
        </div>
        <div className="body">
          Your appointment has been scheduled for:
          <div className="date">
            {/* Date: {times.state.date[0]}/{times.state.date[1]}/{times.state.date[2]} FIX DATE */}
          </div>
          <div className="times">
            {/* {times.state.startTime} - {times.state.endTime} FIX TIME */}
          </div>
        </div>
        <div className="foot">
          <button
            type="button"
            onClick={() => {
              navigate('/bookings');
            }}
          >
            RETURN TO BOOKINGS
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookingConfirm;
