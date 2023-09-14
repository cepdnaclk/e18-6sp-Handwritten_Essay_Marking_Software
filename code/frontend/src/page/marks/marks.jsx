import React, { useState } from 'react';
import Modal from './Modal'; // Create a separate Modal component

function App() {
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [marks, setMarks] = useState(null); // State to store the marks

  // Function to fetch and set marks (replace with your API call)
  const fetchMarks = async () => {
    // Simulate fetching marks from an API
    const response = await fetch('/api/marks');
    const data = await response.json();
    // setMarks(data.marks);
    setMarks(78)
  };

  return (
    <div>
      <button onClick={fetchMarks}>Show Marks</button>
      {showModal && <Modal marks={marks} onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default App;
