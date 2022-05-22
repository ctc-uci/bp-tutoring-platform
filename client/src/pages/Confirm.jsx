import React from 'react';
import './Confirm.css';
import { useNavigate, useLocation } from 'react-router-dom';

function Confirm() {
  let navigate = useNavigate();
  const times = useLocation();
  return (
    <div className="temp-change-later">
      Success! Your appointment has been scheduled for:
      <div className="date">
        Date: {times.state.date[0]}/{times.state.date[1]}/{times.state.date[2]}
      </div>
      <div className="times">
        {times.state.startTime} - {times.state.endTime}
      </div>
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        RETURN TO CALENDAR
      </button>
    </div>
  );
}

export default Confirm;
