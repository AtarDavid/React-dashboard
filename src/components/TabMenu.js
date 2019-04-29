import React, { Component } from 'react';
import ToDoList from './ToDoList'
import NewsFeed from './NewsFeed';

export default class TabMenu extends Component {
  
    render() {
      return (
        <div className="tabmenu">
          <input id="tab1" type="radio" name="tabs" />
          <label for="tab1">To Do List</label>

          <input id="tab2" type="radio" name="tabs" />
          <label for="tab2">Newsfeed</label>

          <input id="tab3" type="radio" name="tabs" />
          <label for="tab3">Bla bla</label>

          <section id="content1">
            <ToDoList />
          </section>

          <section id="content2">
            <NewsFeed />
          </section>

          <section id="content3">
            Huhuhu
          </section>
        </div>
      );
    }

}