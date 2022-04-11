import React from 'react';
import './Calendar.css';
import { render } from 'react-dom';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import Modal from '../components/Modal.jsx';

function CalendarPage() {
  return (
    <div>
      <Calendar />
    </div>
  );
}

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
      {console.log(date)}
    </div>
  );
};

render(<ReactCalendar />, document.querySelector('#root'));
export default CalendarPage;
