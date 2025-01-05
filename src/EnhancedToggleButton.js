import React, { useState } from 'react';

const EnhancedToggleButton = ({ initialState = false, disabled = false }) => {

  const [button, setButton] = useState(initialState);

  const handleToggle = () => {
    if (!disabled) {
      setButton(!button); 
    }
  };


  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: button ? 'green' : 'red', 
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: disabled ? 'not-allowed' : 'pointer', 
    opacity: disabled ? 0.5 : 1, 
  };

  return (
    <button style={buttonStyle} onClick={handleToggle} disabled={disabled}>
      {button ? 'ON' : 'OFF'}
    </button>
  );
};

export default EnhancedToggleButton;
