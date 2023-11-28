// Filter.js
import React from 'react';

const Filter = ({ onCategoryChange }) => {
  return (
    <select onChange={onCategoryChange}>
      {/* Your category options here */}
    </select>
  );
};

export default Filter;