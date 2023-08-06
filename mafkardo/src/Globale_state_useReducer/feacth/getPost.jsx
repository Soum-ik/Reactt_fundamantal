import React, { useReducer, useEffect, startTransition } from "react";
const initalState = {
  loading: true,
  post: {},
  error: "",
  dic: {}
};

const reducer = (state, action) => {

  if (action.type === "SUCCES") {
    return {
      loading: false,
      error: "",
      post: action.result,
      dic : action.body,
      
    };
  } else if (action.type === "FALSE") {
    return {
      loading: false,
      error: "There was found a error",
      post: {},
      dic : {}
    };
  } else {
    return state;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initalState);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "SUCCES", result: data, body : body});
      })
      .catch(() => {
        dispatch({ type: "ERROR" });
      });
  }, []);

  return (
    <div>
      {state.loading ? "loading.." : state.post.title}
      {state.loading ? state.dic.body : "no founde body"}
      {state.error || null}
    </div>
  );
}
