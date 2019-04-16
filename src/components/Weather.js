import React, { Component } from 'react';

export default class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      icon: "logo"
    };
  }
  componentDidMount() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?zip=12681,de&units=metric&appid=6ae8d6fa95479985fa2f3d6c41820fbd`)
      .then(
        response => response.json()
      )
      .then(
        weather => {
          this.setState({ icon: weather.weather[0].icon })
          document.querySelector(`.weather .temperature`).innerHTML = Math.round(weather.main.temp) + '°C'
        },
      )
      .catch(
        err => document.querySelector(`.weather`).innerHTML = `An error has occurred.`
      );
  }

  render() {
    return (
      <div className="weather">
        <img className="icon" src={require(`../assets/img/${this.state.icon}.svg`)} />
        <div className="temperature" />
      </div>
    );
  }

}