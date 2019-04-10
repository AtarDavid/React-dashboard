import React, { Component } from 'react';

export default class Footer extends Component {
  
    render() {
      return (
        <footer>
          <p>
            &copy; <a href="https://peter-stuhlmann-webentwicklung.de/">Peter R. Stuhlmann</a> and <a href="https://atardavid.com/">Atar David</a>, 2019
          </p>
          <nav>
            <ul>
              <li>Github</li>
              <li>Legal Notice</li>
              <li>Privacy Policy</li>
            </ul>
          </nav>
        </footer>
      );
    }

}