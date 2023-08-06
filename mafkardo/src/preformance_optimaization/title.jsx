import React from "react";

function Title() {
  console.log("rendering title");
  return <h2>useCallBack Hook Cmd</h2>;
}

export default React.memo(Title);
