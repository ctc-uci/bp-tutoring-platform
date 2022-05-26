import React from 'react';
import './Confirm.css';
import { useNavigate, useLocation } from 'react-router-dom';

function Confirm() {
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
            Date: {times.state.date[0]}/{times.state.date[1]}/{times.state.date[2]}
          </div>
          <div className="times">
            {times.state.startTime} - {times.state.endTime}
          </div>
        </div>
        <div className="foot">
          <button
            type="button"
            onClick={() => {
              navigate('/');
            }}
          >
            RETURN TO CALENDAR
          </button>
        </div>
      </div>
    </div>
  );
}

export default Confirm;
