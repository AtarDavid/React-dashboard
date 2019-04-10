import React, { Component } from 'react';
import Clock from './Clock';
import Weather from './Weather';

export default class Header extends Component {

  render() {
    return (
      <header>
        <Clock />
        <Weather />
        <div className="settings-icon">
          <a className="settings-toggle" href="#settings"><span className="fas fa-cog">&nbsp;</span></a>
        </div>
      </header>
    );
  }

}