import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import VideoListEntry from './VideoListEntry';
import { selectVideo } from '../actions';

class VideoList extends Component {

  createList() {
    let { videoList, selectVideo } = this.props;
    return videoList.map((item, i) => {
      return <VideoListEntry key={i} video={item} handleSelectedVideo={selectVideo} />
    })
  }

  render() {
    let { videoList, isLoading, error } = this.props;
    return (
      <div className="videoList">
        {
          isLoading ? <div>Loding Videos....</div> :
          error ? <div>{error.message}</div> : this.createList()
        }
      </div>
    );
  }
}

VideoList.propTypes = {
  videoList: PropTypes.array.isRequired,
  selectVideo: PropTypes.func.isRequired,
}

function mapStateToProps({videoList}) {
  return {
    videoList: videoList.videos,
    isLoading: videoList.isLoading,
    error: videoList.error
  }
};

export default connect(mapStateToProps, {selectVideo})(VideoList);