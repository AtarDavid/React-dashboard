import React, { Component } from 'react'

export default class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            greeting: "Hello"
        };
    }

    componentDidMount() {
        this.greet()
    }

    determineTime() {
        switch (this.state.date.getHours()) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                return 1;
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
                return 2;
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
                return 3;
            case 18:
            case 19:
            case 20:
            case 21:
            case 22:
            case 23:
                return 4;
            default:
                return;
        }
    }

    greet() {
        const phrase = ['Hello', 'Good Night', 'Good Morning', 'Good Afternoon', 'Good Evening']
        const time = this.determineTime()
        this.setState({
            greeting: phrase[time]
        });
    }

    render() {
        return (
            <h1>{this.state.greeting}, {this.props.username}!</h1 >
        );
    }
}