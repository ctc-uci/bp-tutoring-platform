import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css';
import BookingModal from '../components/BookingModal';

const Bookings = () => {
  const [date, setDate] = useState(new Date());
  const [openModal, setOpenModal] = useState(false);
  const onOpenModal = date => {
    setOpenModal(true);
    setDate(date);
  };

  return (
    <div>
      <Calendar onClickDay={onOpenModal} value={date} />
      {openModal && <BookingModal closeModal={() => setOpenModal(false)} date={date} />}
    </div>
  );
};

export default Bookings;
