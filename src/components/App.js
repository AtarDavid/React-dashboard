import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../assets/scss/App.scss';
import Header from './Header';
import Home from './Home';
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
        <Footer />
        
        <Route exact path="/" component={ Home } />
        <Route path="/legalnotice" component={ LegalNotice } />
        <Route path="/privacypolicy" component={ PrivacyPolicy } />
      </Router>
    );
  }
}

export default App;
