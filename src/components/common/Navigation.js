import React from 'react';
import './css/Navigation.css';

const Navigation = ({ children, backgroundColor, color, position }) => {
  return (
    <nav style={{backgroundColor: backgroundColor, justifyContent: position }}>
      <ul style={{color: color}}>
        {children}
      </ul>
    </nav>
  );
}

export { Navigation }
