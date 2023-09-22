import React from 'react';

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
};

const verticalLineStyle = {
  height: '80%',
  border: 'none',
  borderLeft: '1px solid #AAB2C873',
  display: 'block',
  margin : "10px",
  marginLeft:"20px" ,
 
};

function VerticalLine() {
  return (
    <div style={containerStyle}>
      <div style={verticalLineStyle}></div>
    </div>
  );
}

export default VerticalLine;
