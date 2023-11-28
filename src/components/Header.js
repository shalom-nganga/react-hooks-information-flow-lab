// Header.js
import React from 'react';

const Header = ({ onDarkModeClick }) => {
  return (
    <header>
      <button onClick={onDarkModeClick}>Toggle Dark Mode</button>
    </header>
  );
};

export default Header;