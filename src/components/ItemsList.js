import React, { Component } from 'react'

export default class ItemsList extends Component {

    render() {
        return (
            <ul>
                {this.props.items.map(
                    item => (
                        < li key={item.id} > {item.text}
                            < button type="button" className="close" id={item.id} aria-label="Close" onClick={this.props.handleClick}>
                                &times;
                            </button>
                        </li >
                    )
                )
                }
            </ul>
        )
    }
}
