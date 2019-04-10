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

            <div className="username-input"><span>User</span> <input id="usernameInput" type="text" placeholder="Enter your name" /></div>
            
            <ul className="background-categories">
                <li><label>{/* img */}<br /><input type="radio" name="background" value="1" /></label></li>
                <li><label>{/* img */}<br /><input type="radio" name="background" value="2" /></label></li>
                <li><label>{/* img */}<br /><input type="radio" name="background" value="3" /></label></li>
                <li><label>{/* img */}<br /><input type="radio" name="background" value="4" /></label></li>
                <li><label>{/* img */}<br /><input type="radio" name="background" value="5" /></label></li>
                <li><label>{/* img */}<br /><input type="radio" name="background" value="6" /></label></li>
            </ul>

            <div className="zip-input"><span>ZIP</span><input id="zipCodeInput" type="number" placeholder="12345" /></div>
          
          </div>

          <a href="#" className="backdrop"></a>

        </React.Fragment>
      );
    }

}