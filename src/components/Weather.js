import React, { Component } from 'react';

export default class Weather extends Component {

    componentDidMount () {
      fetch(`https://api.openweathermap.org/data/2.5/weather?zip=12681,de&units=metric&appid=6ae8d6fa95479985fa2f3d6c41820fbd`)
          .then(
              response => response.json()
          )
          .then(
              weather => {
                  document.querySelector(`.weather .icon`).innerHTML = `<img src="../assets/img/weather/${weather.weather[0].icon}.svg">`
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
          <div className="icon" />
          <div className="temperature" />
        </div>
      );
    }

}