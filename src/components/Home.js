import React from 'react';
import Welcome from './Welcome';
import ToDoList from './ToDoList'

export default function Home() {
    return <React.Fragment>
        <Welcome />
        <ToDoList />
    </React.Fragment>
}
