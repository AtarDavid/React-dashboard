import React, { Component } from 'react'
import ItemsList from './ItemsList';
import { temp } from './TemporaryList'

export default class ToDoList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            text: '',
            items: temp || JSON.parse(localStorage.getItem('todo')) || []
        }
    }

    handleClick = (event) => {
        this.setState({ items: this.state.items.filter(item => item.id != event.target.id) })
    }

    handleChange = (event) => {
        this.setState({ text: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // eslint-disable-next-line
        if (this.state.text) {
            const newItem = {
                id: Date.now(),
                text: this.state.text
            }
            const newList = this.state.items.concat(newItem)
            this.setState({
                items: newList,
                text: ''
            })
            localStorage.setItem('todo', JSON.stringify(newList))
        }
    }

    render() {
        return (
            <div className="todo">
                <h3>To do</h3>

                <ItemsList items={this.state.items} handleClick={this.handleClick} />

                <form onSubmit={this.handleSubmit}>
                    <input type="text" id="listItem" onChange={this.handleChange} value={this.state.text}></input>
                    <button>
                        Add Task
                    </button>
                </form>
            </div>
        )
    }
}