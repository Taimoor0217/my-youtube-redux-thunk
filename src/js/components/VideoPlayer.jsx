import React, { Component } from 'react';
import PropTypes from 'prop-types';


const VideoPlayer = ({ seletedVideo }) => {
  if(Object.keys(seletedVideo).length) {
    var seletedVideoURL = "https://www.youtube.com/embed/" + seletedVideo.id.videoId
  }
  return (
    <div className="videoPlayer">
      <div className="player embed-responsive embed-responsive-16by9">
        <iframe 
          className="embed-responsive-item"
          src={selectedVideoURL} 
          frameborder="0"
          allowFullScreen
        />
      </div>
      <div className="video-details">
        <h4 className="video-title">
          {Object.keys(selectedVideo).length ? selectedVideo.snippet.title : ""}
        </h4>
        <p className="video-descriptions">
          {Object.keys(seletedVideo).length ? selectedVideo.snippet.description : ""}
        </p>
      </div>
    </div>
  )
};

VideoPlayer.propTypes = {
}

export default VideoPlayer;