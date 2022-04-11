import React, { useState } from 'react';
import { render } from 'react-dom';
import Calendar from 'react-calendar';

import './Calendar.css';
import Modal from '../components/Modal';

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
    </div>
  );
};

render(<ReactCalendar />, document.querySelector('#root'));
export default CalendarPage;
