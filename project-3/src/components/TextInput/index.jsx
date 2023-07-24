import React from 'react';
import P from 'prop-types';

import './styles.css';

export const TextInput = ({ searchValue, handleChange }) => (
  <input
    className="text-input"
    onChange={handleChange}
    value={searchValue}
    type="search"
    placeholder="Type your search"
  />
);

TextInput.propTypes = {
  searchValue: P.string.isRequired,
  handleChange: P.func.isRequired,
};
