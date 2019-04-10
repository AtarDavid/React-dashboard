import React, { Component } from 'react';

export default class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            format: { weekday: 'long', year: 'numeric', day: '2-digit', month: 'long' }
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div className="clock">
                <p className="time">{this.state.date.toLocaleTimeString('de-DE')}</p>
                <p className="date">{this.state.date.toLocaleDateString('en-DE', this.state.format)}</p>
            </div>
        );
    }
}