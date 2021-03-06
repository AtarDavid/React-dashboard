import React, { Component } from 'react';

export default class Settings extends Component {

  render() {
    return (
      <React.Fragment>

        <div id="settings" className="settings">

          <a href="#" className="settings-toggle-out">
            <span className="fas fa-times">{'\u00A0'}</span>
          </a>

          <h2>Settings</h2>

          <div className="username-input"><span>User</span> <input id="usernameInput" type="text" placeholder="Enter your name" onKeyDown={this.props.changeUsername} /></div>

          <ul className="background-categories">
            <li><label><img src={require(`../assets/img/background/landscape.jpg`)} /><br /><input type="radio" name="background" value="landscape" onChange={this.props.handleChange} /></label></li>
            <li><label><img src={require(`../assets/img/background/paris.jpg`)} /><br /><input type="radio" name="background" value="paris" onChange={this.props.handleChange} /></label></li>
            <li><label><img src={require(`../assets/img/background/space.jpg`)} /><br /><input type="radio" name="background" value="space" onChange={this.props.handleChange} /></label></li>
            <li><label><img src={require(`../assets/img/background/cityscape.jpg`)} /><br /><input type="radio" name="background" value="cityscape" onChange={this.props.handleChange} /></label></li>
            <li><label><img src={require(`../assets/img/background/wildlife.jpg`)} /><br /><input type="radio" name="background" value="wildlife" onChange={this.props.handleChange} /></label></li>
            <li><label><img src={require(`../assets/img/background/ocean.jpg`)} /><br /><input type="radio" name="background" value="ocean" onChange={this.props.handleChange} /></label></li>
            <li><label><img src={require(`../assets/img/background/blackwhite.jpg`)} /><br /><input type="radio" name="background" value="blackwhite" onChange={this.props.handleChange} /></label></li>
            <li><label><img src={require(`../assets/img/background/architecture.jpg`)} /><br /><input type="radio" name="background" value="architecture" onChange={this.props.handleChange} /></label></li>
          </ul>

          <div className="zip-input"><span>ZIP</span><input id="zipCodeInput" type="number" placeholder="12345" /></div>

        </div>

        <a href="#" className="backdrop"></a>

      </React.Fragment>
    );
  }

}