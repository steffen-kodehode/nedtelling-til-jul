import React from "react";
import DateTimeDisplay from "./DateTimeDisplay";
import { useCountdown } from "../hooks/CountdownHook";
import { useState } from "react";

const ChristmasGreeting = () => {
  return (
    <div className="christmas-greeting">
      <h1>MERRY CHRISTMASS!</h1>
      <h3>Hava a Lovely Christmas Time!</h3>
    </div>
  );
};

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
      <div className="Days">
        <DateTimeDisplay
          className="DateTimeDisplay"
          value={days}
          type={"Days"}
          isDanger={days <= 3}
        />
      </div>
      {/* <p className="timerspacer">:</p> */}
      <div className="Hours">
        <DateTimeDisplay
          className="DateTimeDisplay"
          value={hours}
          type={"Hours"}
          isDanger={false}
        />
      </div>
      {/* <p className="timerspacer">:</p> */}
      <div className="Minutes">
        <DateTimeDisplay
          className="DateTimeDisplay"
          value={minutes}
          type={"Mins"}
          isDanger={false}
        />
      </div>
      {/* <p className="timerspacer">:</p> */}
      <div className="Seconds">
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

  if (days + hours + minutes + seconds <= 0) {
    return <ChristmasGreeting />;
  } else {
    return (
      <div>
        <h1 className="timerhead">Time Until christmas Eve</h1>
        <ShowCounter
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
      </div>
    );
  }
};

export default CountdownTimer;
