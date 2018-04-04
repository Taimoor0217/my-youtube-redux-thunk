import React, { Component } from 'react';
import { shape, func, string, arrayOf, bool } from 'prop-types';
import { connect } from 'react-redux';

import VideoListEntry from './VideoListEntry';
import * as actions from '../actions';

export class VideoList extends Component {

  createList() {
    const { videoList, selectVideo } = this.props;
    videoList.map(item => (
      <VideoListEntry
        key={item.id.videoId || item.id.playlistId}
        video={item}
        handleSelectedVideo={selectVideo}
      />
    ));
  }

  render() {
    const { isLoading, error } = this.props;
    let content;
    if (isLoading) {
      content = <div>Loading Videos...</div>;
    } else if (error) {
      content = <div>{error.message}</div>
    } else {
      content = this.createList();
    }

    return (
      <div className="videoList">
        { content }
      </div>
    );
  }
}

VideoList.propTypes = {
  videoList: arrayOf(
    shape({
      id: shape({
        videoId: string,
      })
    })
  ).isRequired,
  selectVideo: func.isRequired,
  isLoading: bool.isRequired,
  error: shape({
    message: string
  })
};

VideoList.defaultProps = {
  error: null
};

function mapStateToProps({ videoList }) {
  return {
    videoList: videoList.videos,
    isLoading: videoList.isLoading,
    error: videoList.error
  }
};

export default connect(mapStateToProps, { selectVideo: actions.selectVideo })(VideoList);