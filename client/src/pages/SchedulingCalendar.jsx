import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css';
import SchedulingModal from '../components/SchedulingModal';
import { useNavigate } from 'react-router-dom';
import './SchedulingCalendar.css';

const SchedulingCalendar = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState(new Date());
  const [openModal, setOpenModal] = useState(false);
  const onOpenModal = d => {
    setOpenModal(true);
    setDate(d);
  };

  return (
    <div>
      <Calendar onClickDay={onOpenModal} value={date} />
      {openModal && <SchedulingModal closeModal={() => setOpenModal(false)} date={date} />}
      <div className="calendar-bottom">
        <button
          className="booking-page-btn"
          onClick={() => {
            navigate('/bookings');
          }}
        >
          BOOK A TIME
        </button>
      </div>
    </div>
  );
};

export default SchedulingCalendar;
