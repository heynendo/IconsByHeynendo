import React from 'react';

const Close = ({ size = 24, color = 'currentColor', rotation = 0, className = '', style = {}, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    className={className}
    style={{ ...style, transform: rotation ? `rotate(${rotation}deg)` : style.transform }}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  ><desc>x, exit, cancel, dismiss, remove, delete, clear</desc><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 6 6 18M6 6l12 12"/></svg>
);

Close.tags = ["x","exit","cancel","dismiss","remove","delete","clear"];

export default Close;
