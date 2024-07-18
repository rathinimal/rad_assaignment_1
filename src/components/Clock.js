// src/components/Clock.js
import React, { useState, useEffect } from 'react';
import '../App.css';
const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='clock'>
      <h2>{time.toLocaleTimeString()}</h2>
    </div>
  );
};

export default Clock;
