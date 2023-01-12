import React from "react";
import CountdownTimer from "./Components/Counter";
import { useState } from "react";
import GuestBook from "./Components/Guestbook";

import "./App.css";

function App() {
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
      <div className="countdowntimer">
        <CountdownTimer targetDate={christmasEve} />
      </div>
      <div>
        <GuestBook />
      </div>
    </div>
  );
}

export default App;
