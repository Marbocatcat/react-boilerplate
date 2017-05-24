import React from 'react';
import './css/Header.css';

const Header = ({ children }) => {
  return (
    <section>
      <div className="container">
        <h1>{ children }</h1>
      </div>
    </section>
  )
}



export { Header };
