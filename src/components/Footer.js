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
              <li><a target="_blanc" href="https://github.com/AtarDavid/React-dashboard">Github</a></li>
              <li><a href="./legalnotice">Legal Notice</a></li>
              <li><a href="./privacypolicy">Privacy Policy</a></li>
            </ul>
          </nav>
        </footer>
      );
    }

}