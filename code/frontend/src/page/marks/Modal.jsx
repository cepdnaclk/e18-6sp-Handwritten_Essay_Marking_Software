import React from 'react';
import './Modal.css'; 

function Modal({ marks, onClose }) {

    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('modal-overlay')) {
            onClose();
        }
    };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>Close</button>
        <h2>Your Essay Marks</h2>
        <p>{marks}</p>
      </div>
    </div>
  );
}

export default Modal;
