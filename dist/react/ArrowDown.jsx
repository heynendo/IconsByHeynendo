import React from 'react';

const ArrowDown = ({ size = 24, color = 'currentColor', rotation = 0, className = '', style = {}, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    className={className}
    style={{ ...style, transform: rotation ? `rotate(${rotation}deg)` : style.transform }}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  ><desc>down, chevron, dropdown, collapse, expand, descending, sort</desc><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m6 9 6 6 6-6"/></svg>
);

ArrowDown.tags = ["down","chevron","dropdown","collapse","expand","descending","sort"];

export default ArrowDown;
