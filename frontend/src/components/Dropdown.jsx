import React, { useState } from 'react';
import "../styling/navbar.css";

function Dropdown({ label, info }) {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleDropdown = () => setIsOpen(!isOpen);
  
    return (
      <div className="dropdown-container">
        <button onClick={toggleDropdown} className="dropdown-button">
          {label}
        </button>
        {isOpen && (
          <div className="dropdown-content">
            {info.map((item, index) => (
              <p key={index}>{item.label}</p>
            ))}
          </div>
        )}
      </div>
    );
  }
  
  export default Dropdown;
