import React, { useState, useEffect } from "react";

const ClockUsingHooks = props => {
  const [time, setTime] = useState(new Date());

  const changeTime = () => {
    setTime(new Date());
  };

  useEffect(() => {
    const tick = setInterval(() => {
      changeTime();
    }, 1000);
    return () => clearInterval(tick);
  });
  return (
    <div className="d-flex justify-content-center clock">
            <h2>{time.toLocaleTimeString()}.</h2>
    </div>
  )};

  export default ClockUsingHooks;