import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import LegalNotice from './LegalNotice';
import PrivacyPolicy from './PrivacyPolicy';
import Settings from './Settings';
import Background from './Background';
import ReactMetaTags from './MetaTags';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: localStorage.getItem("theme") || "landscape",
      username: localStorage.getItem("username") || "user"
    };
  }

  handleChange = (event) => {
    this.setState({ theme: event.target.value }); localStorage.setItem("theme", event.target.value)
  }

  changeUsername = (event) => {
    if (event.keyCode === 13) {
      this.setState({ username: event.target.value }); localStorage.setItem("username", event.target.value)
    }
  }

  render() {
    return (
      <Router>
        <ReactMetaTags />
        <Background key={this.state.theme} value={this.state.theme} />
        <Header />
        <Settings handleChange={this.handleChange} changeUsername={this.changeUsername} />
        <main>
          <Route exact path="/"
            render={(props) => <Home {...props} username={this.state.username} />}
          />
          <Route path="/legalnotice" component={LegalNotice} />
          <Route path="/privacypolicy" component={PrivacyPolicy} />
        </main>
        <Footer />
      </Router>
    );
  }
}

export default App;
