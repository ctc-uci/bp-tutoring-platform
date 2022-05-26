import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './BookingCalendar.css';
import { useNavigate } from 'react-router-dom';
import BookingModal from '../components/BookingModal';

const BookingCalendar = () => {
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
      {openModal && <BookingModal closeModal={() => setOpenModal(false)} date={date} />}
      <div className="bookings-calendar-bottom">
        <button
          type="button"
          className="create-ts-page-btn"
          onClick={() => {
            navigate('/');
          }}
        >
          CREATE A TIME SLOT
        </button>
      </div>
    </div>
  );
};

export default BookingCalendar;
