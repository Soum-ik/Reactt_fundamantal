import React from "react";

function Input({ type, placeHolder }, ref) {
  return <input ref={ref} type={type} placeholder={placeHolder} />;
}

const useReff = React.forwardRef(Input);
export default useReff;
