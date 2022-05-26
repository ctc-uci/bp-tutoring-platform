import React from 'react';
import './SchedulingConfirm.css';
import { useNavigate, useLocation } from 'react-router-dom';

function SchedulingConfirm() {
  const navigate = useNavigate();
  const times = useLocation();
  return (
    <div className="confirmBG">
      <div className="confirmContainer">
        <div className="head">
          <h1>Success!</h1>
        </div>
        <div className="body">
          You have created an availability between:
          <div className="date">
            Date: {times.state.dateArray[0]}/{times.state.dateArray[1]}/{times.state.dateArray[2]}
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

export default SchedulingConfirm;
