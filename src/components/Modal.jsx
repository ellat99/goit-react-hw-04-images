// Modal.js
import React from 'react';
import './style.css';

const Modal = ({ imageUrl, onClose }) => {
  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal">
        <img src={imageUrl} alt="Large" />
      </div>
    </div>
  );
};

export default Modal;
