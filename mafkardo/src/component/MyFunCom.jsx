import { useEffect, useState } from "react";

export default function MyComponent() {
  const [date, setDate] = useState(new Date());
  const [count, setCount] = useState(0);

  const tik = () => {
    setDate(new Date());
    console.log("tiking");
  };

  const addClick = () => {
    setCount((prevCount) => prevCount + 1);
  };
  useEffect(() => {
    document.title = `clicked ${count} time`;
  }, [count]);

  useEffect(() => {
    const interval =  setInterval(tik, 1000);

    return () => {
      clearInterval(interval)
    };
  }, []);

  return (
    <div>
      <p>Time : {date.toLocaleTimeString()}</p>
      <button onClick={addClick}>click</button>
    </div>
  );
}
