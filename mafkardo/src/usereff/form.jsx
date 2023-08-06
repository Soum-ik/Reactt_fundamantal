import { useRef } from "react";
import { useEffect } from "react";
import Input from "./input";

export default function Form() {
  const inputReff = useRef(null);
  const clicking =()=> inputReff.current.focus();
  useEffect(() => {
    clicking()
  }, []);

  return (
    <div>
      <p>
        <Input ref={inputReff} type="text" placeHolder="search..." />
      </p>
    </div>
  );
}
 