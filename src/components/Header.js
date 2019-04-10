import React, { Component } from 'react';
import Clock from './Clock';

export default class Header extends Component {

  render() {
    return (
      <header>
        <Clock />
        {/* weather widget */}
        <a className="settings-toggle-out" href="#settings"><span className="fas fa-cog">&nbsp;</span></a>
      </header>
    );
  }

}