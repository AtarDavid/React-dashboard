import React, { Component } from 'react';
import Clock from './Clock';

export default class Header extends Component {

  render() {
    return (
      <header>
        <Clock />
        {/* weather widget */}
        <div className="settings-icon">
          <a className="settings-toggle" href="#settings"><span className="fas fa-cog">&nbsp;</span></a>
        </div>
      </header>
    );
  }

}