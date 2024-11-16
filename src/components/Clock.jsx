import { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="flex">
      <p>{time.toLocaleDateString()}</p>
      <p className="biggerFont">{time.toLocaleTimeString()}</p>
    </div>
  );
}

export default Clock;
