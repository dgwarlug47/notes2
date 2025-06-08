import React from "react";

const Navbar = ({ titles, onChange }) => {
  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: "#333",
    color: "#fff"
  };

  return (
    <nav style={navStyle}>
      <div>
        {titles.map((title, index) => (
          <button
            key={index}
            onClick={() => onChange(title)}
            style={{
              background: "none",
              border: "none",
              color: "#fff",
              cursor: "pointer",
              marginLeft: "1rem"
            }}
          >
            {title}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;