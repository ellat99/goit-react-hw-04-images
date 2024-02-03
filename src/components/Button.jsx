import React from 'react';
import './style.css';
const Button = ({ onClick }) => {
  return (
    <button className="load-more-button" onClick={onClick}>
      Load more
    </button>
  );
};
export default Button;
