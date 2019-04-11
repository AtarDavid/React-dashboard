import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import LegalNotice from './LegalNotice';
import PrivacyPolicy from './PrivacyPolicy';
import Settings from './Settings';
import Background from './Background'

class App extends Component {
  render() {
    return (
      <Router>
        <Background />
        <Header />
        <Settings />
        <main>
          <Route exact path="/" component={Home} />
          <Route path="/legalnotice" component={LegalNotice} />
          <Route path="/privacypolicy" component={PrivacyPolicy} />
        </main>
        <Footer />
      </Router>
    );
  }
}

export default App;
