import React, { Component } from 'react';

export default class Settings extends Component {

  handleChange = (event) => {
    console.log("change theme")
  }

  render() {
    return (
      <React.Fragment>

        <div id="settings" className="settings">

          <a href="#" className="settings-toggle-out">
            <span className="fas fa-times">{'\u00A0'}</span>
          </a>

          <h2>Settings</h2>

          <div className="username-input"><span>User</span> <input id="usernameInput" type="text" placeholder="Enter your name" /></div>

          <ul className="background-categories">
            <li><label>{/* img */}<br /><input type="radio" name="background" value="landscape" onChange={this.handleChange} /></label></li>
            <li><label>{/* img */}<br /><input type="radio" name="background" value="paris" onChange={this.handleChange} /></label></li>
            <li><label>{/* img */}<br /><input type="radio" name="background" value="space" onChange={this.handleChange} /></label></li>
            <li><label>{/* img */}<br /><input type="radio" name="background" value="cityscape" onChange={this.handleChange} /></label></li>
            <li><label>{/* img */}<br /><input type="radio" name="background" value="wildlife" onChange={this.handleChange} /></label></li>
            <li><label>{/* img */}<br /><input type="radio" name="background" value="ocean" onChange={this.handleChange} /></label></li>
            <li><label>{/* img */}<br /><input type="radio" name="background" value="blackwhite" onChange={this.handleChange} /></label></li>
            <li><label>{/* img */}<br /><input type="radio" name="background" value="architecture" onChange={this.handleChange} /></label></li>
          </ul>

          <div className="zip-input"><span>ZIP</span><input id="zipCodeInput" type="number" placeholder="12345" /></div>

        </div>

        <a href="#" className="backdrop"></a>

      </React.Fragment>
    );
  }

}