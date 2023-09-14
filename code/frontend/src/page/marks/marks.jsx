import React, { useState } from 'react';
import Modal from './Modal'; 
import './Modal.css'; 

const Marks = () => {
  const [showModal, setShowModal] = useState(false); 
  const [marks, setMarks] = useState(null); 

  const fetchMarks = async () => {
    // const response = await fetch('/api/marks');
    // const data = await response.json();
    // setMarks(data.marks);
    setMarks(78)
    setShowModal(true)
  };

  return (
    <div>
      <button className="show-marks-button" onClick={fetchMarks}>Show Marks</button>
      {showModal && <Modal marks={marks} onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default Marks;
