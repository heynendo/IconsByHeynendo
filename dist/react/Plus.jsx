import React from 'react';

const Plus = ({ size = 24, color = 'currentColor', rotation = 0, className = '', style = {}, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    className={className}
    style={{ ...style, transform: rotation ? `rotate(${rotation}deg)` : style.transform }}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  ><desc>add, new, create, insert, increase, more, expand</desc><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v14M5 12h14"/></svg>
);

Plus.tags = ["add","new","create","insert","increase","more","expand"];

export default Plus;
