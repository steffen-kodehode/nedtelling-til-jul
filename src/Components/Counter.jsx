import React from "react";
import DateTimeDisplay from "./DateTimeDisplay";
import { useCountdown } from "../hooks/CountdownHook";
import { useState } from "react";

// const ExpiredNotice = () => {
//   return (
//     <div className="expired-notice">
//       <span>Expired!!!</span>
//       <p>Please select a future date and time.</p>
//     </div>
//   );
// };

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-counter">
      {/* <a
        href="_blank"
        target="_blank"
        rel="noopener noreferrer"
        className="countdown-link"
      >
      </a> */}
      <div>
        <DateTimeDisplay
          className="DateTimeDisplay"
          value={days}
          type={"Days"}
          isDanger={days <= 3}
        />
      </div>
      <p className="timerspacer">|</p>
      <div>
        <DateTimeDisplay
          className="DateTimeDisplay"
          value={hours}
          type={"Hours"}
          isDanger={false}
        />
      </div>
      <p className="timerspacer">|</p>
      <div>
        <DateTimeDisplay
          className="DateTimeDisplay"
          value={minutes}
          type={"Mins"}
          isDanger={false}
        />
      </div>
      <p className="timerspacer">|</p>
      <div>
        <DateTimeDisplay
          className="DateTimeDisplay"
          value={seconds}
          type={"Seconds"}
          isDanger={false}
        />
      </div>
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  //   if (days + hours + minutes + seconds <= 0) {
  //   }
  return (
    <ShowCounter
      days={days}
      hours={hours}
      minutes={minutes}
      seconds={seconds}
    />
  );
};

export default CountdownTimer;
