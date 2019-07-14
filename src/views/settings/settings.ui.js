import React from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from '../../shared-components/toggle';
import './settings.scss';

const Settings = () => {
  return (
    <div className="Settings row center-lg center-md">
      <div className="col-xs-12 col-sm-12 col-md-8 col-lg-7">
        <div className="content">
          <div className="header-area">
            <h2 className="heading">Visual Settings</h2>
            <Link to="/"><i class="fas fa-chevron-left" /></Link>
          </div>
          <div className="setting-night-mode">
            <h4 class="settings-title">Night Mode</h4>
            <DarkModeToggle className="dark-mode" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings; 
