import React, { Component } from 'react';
import Welcome from './Welcome';
import TabMenu from './TabMenu'

export default class Home extends Component {

    render() {
        return <React.Fragment>
            <Welcome username={this.props.username} />
            <TabMenu />
        </React.Fragment >
    }
}