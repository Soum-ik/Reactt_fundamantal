import React, { useEffect } from "react";
import { useState, useRef } from "react";

export default function Time() {
  const [time, setTime] = useState(new Date());

  const intervalUseRff = useRef();

  const tik = () => {
    setTime(new Date());
  };

  useEffect(() => {
    intervalUseRff.current = setInterval(tik, 1000);
    return () => {
      clearInterval(intervalUseRff.current);
    };
  }, []);

  return (
    <>
      <p>{time.toLocaleTimeString()}</p>
      <p>
        <button onClick={clearInterval(intervalUseRff.current)}>cleanUP</button>
      </p>
    </>
  );
}
