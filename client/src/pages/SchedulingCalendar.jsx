import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css';
import Modal from '../components/Modal';

const SchedulingCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [openModal, setOpenModal] = useState(false);
  const onOpenModal = d => {
    setOpenModal(true);
    setDate(d);
  };

  return (
    <div>
      <Calendar onClickDay={onOpenModal} value={date} />
      {openModal && <Modal closeModal={() => setOpenModal(false)} date={date} />}
    </div>
  );
};

export default SchedulingCalendar;
