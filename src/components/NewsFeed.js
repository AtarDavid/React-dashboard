import React, { Component } from 'react';

export default class NewsFeed extends Component {

  constructor(props) {
    super(props)
    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    fetch('https://newsapi.org/v2/top-headlines?country=de&apiKey=02bb62ce0f84446fb6d2039e7adeea31')
      .then(response => response.json())
      .then(data => this.setState({ articles: data.articles }));
  }

  render() {
    const { articles } = this.state;

    return (
      <div className="newsfeed">
        <ul>
          {articles.map(news =>
            <li>
              <a className="newsfeed-title" target="_blanc" href={news.url}>{news.title}</a> <span className="newsfeed-source">({news.source.name})</span>
              <p className="newsfeed-description">{news.description}</p>
            </li>
          )}
        </ul>
      </div>
    );
  }

}