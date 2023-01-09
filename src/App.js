import React from "react";
import CountdownTimer from "./Components/Counter";
import { useState } from "react";

import "./App.css";

// "24 December ${year} 00:00"
// "24 December 2023 00:00"

function App() {
  // const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;

  const [day, setDay] = useState(24);

  const [month, setMonth] = useState("December");

  const [year, setYear] = useState(2023);

  const [time, settime] = useState("00:00");

  const EndDate = new Date(`${day} ${month} ${year} ${time}`).getTime();

  const christmasEve = EndDate;

  // if (0) {
  //   setYear((oldYear) => oldYear + 1);
  // }

  return (
    <div>
      <h1>Countdown Timer</h1>
      <CountdownTimer targetDate={christmasEve} />
    </div>
  );
}

export default App;
