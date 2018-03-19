import React, { Component } from 'react';

import Nav from './Nav';
import VideoPlayer from './VideoPlayer';

class App extends Component {
  render() {
    return (
      <div id="app">
        <Nav />
        <div className="col-md-7">
          <VideoPlayer />
        </div>
        <div className="col-md-5">
          <VideoList />
        </div>
      </div>
    );
  }

  componentDidMount() {
    // const { getVideos } = this.props;
    getVideos('javascript', true);
  }
}

export default App;