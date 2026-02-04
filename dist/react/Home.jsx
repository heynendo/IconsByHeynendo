import React from 'react';

const Home = ({ size = 24, color = 'currentColor', rotation = 0, className = '', style = {}, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    className={className}
    style={{ ...style, transform: rotation ? `rotate(${rotation}deg)` : style.transform }}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  ><desc>house, main, dashboard, start, homepage, root</desc><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 22V12h6v10"/></svg>
);

Home.tags = ["house","main","dashboard","start","homepage","root"];

export default Home;
