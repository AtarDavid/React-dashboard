import React from 'react';
import MetaTags from 'react-meta-tags';
 
export default class ReactMetaTags extends React.Component {
  render() {
    return (
      <MetaTags>
        <title>React Dashboard</title>
        <meta name="description" content="React Dashboard with current time, time-dependent personal greeting, weather indicator, to do list and randomized background image." />
        <meta property="og:title" content="React Dashboard" />
      </MetaTags>
    )
  }
}