// import React { useState } from "react";
import React, { useState } from 'react';

const SimpleToggleButton = () => {
  const [Button, setButton] = useState(false);

  const handleToggle = () => {
    setButton(!Button);
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: Button ? 'green' : 'red',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <button style={buttonStyle} onClick={handleToggle}>
      {Button ? 'ON' : 'OFF'}
    </button>
  );
};

export default SimpleToggleButton;
