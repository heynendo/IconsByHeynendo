import React from 'react';

const Search = ({ size = 24, color = 'currentColor', rotation = 0, className = '', style = {}, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    className={className}
    style={{ ...style, transform: rotation ? `rotate(${rotation}deg)` : style.transform }}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  ><desc>magnify, glass, find, filter, filtering, lookup, query, magnifying</desc><circle cx="11" cy="11" r="8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m21 21-4.35-4.35"/></svg>
);

Search.tags = ["magnify","glass","find","filter","filtering","lookup","query","magnifying"];

export default Search;
