import React, { Component } from 'react';
import PropTypes from 'prop-types';

import VideoListEntry from './VideoListEntry';

class VideoList extends Components {

  createList() {
    return VideoList.map((item, i) => {
      return <VideoListEntry key={i} video={item} handleSelectedVideo={selectVideo} />
    })
  }

  render() {
    return (
      <div className="video-list">
        {
          isLoading ? <div>Loding Videos....</div> :
          error ? <div>{error.message}</div> : this.createList()
        }
      </div>
    );
  }
}

export default VideoList;