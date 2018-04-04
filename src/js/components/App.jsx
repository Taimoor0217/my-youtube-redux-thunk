import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';

import Nav from './Nav';
import VideoPlayer from './VideoPlayer';
import VideoList from './VideoList';
import * as actions from '../actions';

export class App extends Component {

  componentDidMount() {
    const { getVideos } = this.props;
    getVideos('javascript', true);
  }

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
}

App.propTypes = {
  getVideos: func.isRequired,
}

export default connect(null, { getVideos: actions.getVideos })(App);