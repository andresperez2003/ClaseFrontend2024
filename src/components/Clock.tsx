import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup del intervalo
  }, []);

  return (
    <div style={{ fontSize: '0.9rem', textAlign: 'center' }}>
      {time.toLocaleTimeString()}
    </div>
  );
};

export default Clock;