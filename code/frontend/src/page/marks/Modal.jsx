import React from 'react';
import './Modal.css'; // Import CSS for modal styles

function Modal({ marks, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>Close</button>
        <h2>Marks</h2>
        <p>{marks}</p>
      </div>
    </div>
  );
}

export default Modal;
