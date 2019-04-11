import React, { Component } from 'react';

export default class Background extends Component {

    constructor(props) {
        super(props);

        this.state = {
            img: "#",
            api: "https://source.unsplash.com/featured/?",
            keyword: "nature"
        };
    }

    componentDidMount() {
        fetch(this.state.api + this.state.keyword)
            .then(response => this.setState({ img: response.url }))
    }

    render() {
        document.body.style = `background-image: url(${this.state.img})`;
        return null
    }
}