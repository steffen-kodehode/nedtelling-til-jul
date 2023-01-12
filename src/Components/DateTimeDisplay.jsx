import React from "react";

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className="timers">
      <p className="timer">{value}</p>
      <p className="timer">{type}</p>
    </div>
  );
};

export default DateTimeDisplay;
