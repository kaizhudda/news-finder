import React from 'react';

import './toggle.scss';

const Toggle = ({ checked, onChange }) => (
  <div className="dark-mode-toggle">
    {/* <button type="button" onClick={darkMode.disable}>
      ☀
    </button> */}
    <span className="toggle-control">
      <input
        className="dmcheck"
        type="checkbox"
        checked={checked}
        onChange={onChange}
        id="dmcheck"
      />
      <label htmlFor="dmcheck" />
    </span>
    {/* <button type="button" onClick={darkMode.enable}>
      ☾
    </button> */}
  </div>
);

export default Toggle;
