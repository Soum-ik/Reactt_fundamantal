import React from 'react';
function Buttom({ handleChange, children }) {
  console.log(`rendering button ${children}`);
  return (
    <p>
      <button type="button" onClick={handleChange}>
        {children}
      </button>
    </p>
  );
}

export default React.memo(Buttom)