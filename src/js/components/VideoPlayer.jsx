import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';


const VideoPlayer = ({ selectedVideo }) => {
  if(Object.keys(selectedVideo).length) {
    var selectedVideoURL = "https://www.youtube.com/embed/" + selectedVideo.id.videoId
  }
  return (
    <div className="videoPlayer">
      <div className="player embed-responsive embed-responsive-16by9">
        <iframe 
          className="embed-responsive-item"
          src={selectedVideoURL} 
          allowFullScreen
        />
      </div>
      <div className="video-details">
        <h4 className="video-title">
          {Object.keys(selectedVideo).length ? selectedVideo.snippet.title : ""}
        </h4>
        <p className="video-descriptions">
          {Object.keys(selectedVideo).length ? selectedVideo.snippet.description : ""}
        </p>
      </div>
    </div>
  )
};

VideoPlayer.propTypes = {
  selectedVideo: PropTypes.object.isRequired,
}

function mapStateToProps({selectedVideo}) {
  return {
    selectedVideo
  };
};

export default connect(mapStateToProps)(VideoPlayer);