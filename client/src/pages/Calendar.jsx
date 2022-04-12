import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css';
import Modal from '../components/Modal';

const ReactCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [openModal, setOpenModal] = useState(false);
  const onOpenModal = date => {
    setOpenModal(true);
    setDate(date);
  };

  return (
    <div>
      <Calendar onClickDay={onOpenModal} value={date} />
      {openModal && (
        <Modal
          closeModal={setOpenModal}
          month={date.getMonth().toString()}
          day={date.getDate().toString()}
        />
      )}
    </div>
  );
};

export default ReactCalendar;
