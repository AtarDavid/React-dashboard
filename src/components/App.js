import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from '../assets/img/logo.svg';
import '../assets/scss/App.scss';
import Header from './Header';
import Footer from './Footer';
import LegalNotice from './LegalNotice';
import PrivacyPolicy from './PrivacyPolicy';
import Settings from './Settings';

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Settings />
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
          <Route path="/legalnotice" component={ LegalNotice } />
          <Route path="/privacypolicy" component={ PrivacyPolicy } />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
