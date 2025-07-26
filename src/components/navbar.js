import React, { useState } from "react";
import "../style.css";

const Navbar = ({ titles, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("All");

  const handleOptionClick = (title) => {
    onChange(title);
    setSelectedOption(title);
    setIsOpen(false);
  };

  return (
    <nav className="dropdown-nav">
      <div className="dropdown-container">
        <button 
          className="dropdown-toggle" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedOption} &#9662;
        </button>
        {isOpen && (
          <div className="dropdown-menu">
            {titles.map((title, index) => (
              <button
                key={index}
                className="dropdown-item"
                onClick={() => handleOptionClick(title)}
              >
                {title}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;