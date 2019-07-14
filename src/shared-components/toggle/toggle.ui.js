import React from 'react';
import useDarkMode from 'use-dark-mode';

import './toggle.scss';

// Toggle Code from: https://github.com/donavon/use-dark-mode
const Toggle = ({ className }) => {
  const darkMode = useDarkMode(false); 
  return (
    <div className={`dark-mode-toggle ${className || ''}`}>
      <button type="button" onClick={darkMode.disable}>
        ☀
      </button>
      <span className="toggle-control">
        <input
          className="dmcheck"
          type="checkbox"
          checked={darkMode.value}
          onChange={darkMode.toggle}
          id="dmcheck"
        />
        <label htmlFor="dmcheck" />
      </span>
      <button type="button" onClick={darkMode.enable}>
        ☾
      </button>
    </div>
  )
};

export default Toggle;
