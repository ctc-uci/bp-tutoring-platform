import React from 'react';
import './Confirm.css';
import { useNavigate } from 'react-router-dom';

function Confirm() {
  let navigate = useNavigate();
  return (
    <div className="temp-change-later">
      <p>Confirmation Page</p>
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        BACK TO CALENDAR
      </button>
    </div>
  );
}

export default Confirm;
