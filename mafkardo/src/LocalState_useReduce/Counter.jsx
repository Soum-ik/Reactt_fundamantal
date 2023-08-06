import { useReducer } from "react";

const initailValu = 5;
const reducer = (state, action) => {
  switch (action) {
    case "Increment":
      return state + 1;
    case "Decrement":
      return state - 1;
    default:
      return state;
  }
};

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initailValu);
  return (
    <div>
      <div>Count - {state} </div>
      <button onClick={()=>dispatch('Increment')} type="button">Increment</button>
      <button onClick={()=>dispatch('Decrement')} type="button">Decrement</button>
    </div>
  );
}
