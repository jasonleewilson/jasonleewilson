"use client";

import { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  // Function to pad numbers with leading zeros
  function pad(number, length) {
    return (number < 10 ? "0" : "") + number;
  }

  // Function to update the clock
  function updateClock() {
    const now = new Date();
    setTime(now);
  }

  // Function to initialize the clock
  useEffect(() => {
    const intervalId = setInterval(updateClock, 1000);
    return () => clearInterval(intervalId);
  }, []); // Run only once on component mount

  // Extracting time values
  const mo = time.toLocaleString("en-US", { month: "long" });
  const dy = pad(time.getDate(), 2);
  const yr = time.getFullYear();
  const hou = pad(time.getHours());
  const min = pad(time.getMinutes(), 2);
  const sec = pad(time.getSeconds(), 2);
  //   const milli = time.getMilliseconds();

  return (
    <div className='flex pl-4 uppercase'>
      <div id='mon'>{mo}&nbsp;</div>
      <div id='d'>{dy}&nbsp;</div>
      <div id='y'>{yr}&nbsp;</div>
      <div id='h'>{hou}:</div>
      <div id='m'>{min}:</div>
      <div id='s'>{sec}</div>
      {/* <div id='mi'>{milli}</div> */}
    </div>
  );
}

export default Clock;
