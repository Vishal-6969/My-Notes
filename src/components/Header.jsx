import React from "react";

function Header({ noteCount, onClickBell }) {
  const handleBellClick = () => {
    // Call the onClickBell function passed from the parent component
    onClickBell();
  };

  return (
    <header style={{ position: "relative" }}>
      <h1>
        My notes{" "}
        <box-icon name="lock-alt" type="solid" color="#ffffff"></box-icon>
      </h1>
      {/* Notification icon */}
      <div
        style={{
          position: "absolute",
          top: "20px",
          right: "50px",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          backgroundColor: "red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          cursor: "pointer" // Add cursor pointer for better UX
        }}
        onClick={handleBellClick} // Handle click event here
      >
        <box-icon name="bell" type="solid"></box-icon>
        {/* Show notification count if greater than 0 */}
        {noteCount > 0 && <div style={{ position: "absolute", top: "-10px", right: "-10px", backgroundColor: "white", color: "red", borderRadius: "50%", width: "20px", height: "20px", display: "flex", justifyContent: "center", alignItems: "center" }}>{noteCount}</div>}
      </div>
    </header>
  );
}

export default Header;
