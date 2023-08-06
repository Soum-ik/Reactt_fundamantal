import { useReducer } from "react";

const initailValu = {
  counter: 0,
  counter2: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return { ...state, counter: state.counter + action.value };
    case "Decrement":
      return { ...state, counter: state.counter - action.value };
    case "Increment2":
      return { ...state, counter2: state.counter + action.value };
    case "Decrement2":
      return { ...state, counter2: state.counter - action.value };
    default:
      return state;
  }
};

export default function Counter() {
  const [count, dispatch] = useReducer(reducer, initailValu);
  return (
    <div>
      <div>
        {/* title */}
        <div>Count - {count.counter} </div>
        <button
          onClick={() =>
            dispatch({
              type: "Increment",
              value: 1,
            })
          }
          type="button"
        >
          Increment by one
        </button>

        {/*  */}
        <button
          onClick={() =>
            dispatch({
              type: "Decrement",
              value: 1,
            })
          }
          type="button"
        >
          Decrement by one
        </button>
      </div>
      <div>
        <div>Count2 - {count.counter2} </div>
        <button
          onClick={() =>
            dispatch({
              type: "Increment2",
              value: 1,
            })
          }
          type="button"
        >
          Increment2 by one
        </button>

        {/*  */}
        <button
          onClick={() =>
            dispatch({
              type: "Decrement2",
              value: 1,
            })
          }
          type="button"
        >
          Decrement2 by one
        </button>
      </div>
    </div>
  );
}
