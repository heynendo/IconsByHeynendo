import React from 'react';

const Menu = ({ size = 24, color = 'currentColor', rotation = 0, className = '', style = {}, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    className={className}
    style={{ ...style, transform: rotation ? `rotate(${rotation}deg)` : style.transform }}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  ><desc>hamburger, burger, nav, navigation, sidebar, drawer, options</desc><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12h18M3 6h18M3 18h18"/></svg>
);

Menu.tags = ["hamburger","burger","nav","navigation","sidebar","drawer","options"];

export default Menu;
