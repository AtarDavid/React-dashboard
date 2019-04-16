import React, { Component } from 'react';

export default class Background extends Component {

    constructor(props) {
        super(props);

        this.state = {
            img: "#",
            api: "https://source.unsplash.com/1920x1080/?",
        };
    }

    componentDidMount() {
        fetch(this.state.api + this.props.value)
            .then(response => this.setState({ img: response.url }))
    }

    render() {
        document.body.style = `background-image: url(${this.state.img})`;
        return null
    }
}