import React from 'react';

const User = ({ size = 24, color = 'currentColor', rotation = 0, className = '', style = {}, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    className={className}
    style={{ ...style, transform: rotation ? `rotate(${rotation}deg)` : style.transform }}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  ><desc>person, profile, account, avatar, member, contact, people</desc><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/></svg>
);

User.tags = ["person","profile","account","avatar","member","contact","people"];

export default User;
