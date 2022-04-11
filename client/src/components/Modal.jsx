import React from 'react';
import './Modal.css';

function Modal({ closeModal, month, day }) {
  return (
    <div className="modalBG">
      <div className="modalContainer">
        <div className="closeButton">
          <button onClick={() => closeModal(false)}> X </button>
        </div>
        <div className="title">
          <h1>
            Time Selection: Month: {month}, Day: {day}{' '}
          </h1>
        </div>
        <div className="body">
          <p>Times here - to be implemented</p>
        </div>
        <div className="foot">
          <button onClick={() => closeModal(false)}>Back</button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
