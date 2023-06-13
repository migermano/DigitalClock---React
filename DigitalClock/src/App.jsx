import React, { useEffect, useState } from 'react';
import './Appn.css';

export default function App() {
  const [time, setTime] = useState('');

  function formatTime(val) {
    if (val < 10) {
      return '0' + val;
    } else {
      return String(val);
    }
  }

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  }, []);

  function tick() {
    const d = new Date();
    const h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();

    setTime(
      formatTime(h) + ':' + formatTime(m) + ':' + formatTime(s)
    );
  }

  return (
    <div className="clock">
      <div className="screen">
        <h1 className="time">{time}</h1>
      </div>
    </div>
  );
}