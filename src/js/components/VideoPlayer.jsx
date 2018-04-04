import React from 'react';
import { shape, string } from 'prop-types';
import { connect } from 'react-redux';

export const VideoPlayer = ({ selectedVideo }) => {
  let selectedVideoURL;
  if (Object.keys(selectedVideo).length) {
    selectedVideoURL = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;
  }
  return (
    <div className="videoPlayer">
      <div className="player embed-responsive embed-responsive-16by9">
        <iframe
          className="embed-responsive-item"
          src={selectedVideoURL}
          title="Video player"
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
  selectedVideo: shape({
    id: shape({
      videoId: string
    }),
    snippet: shape({
      title: string,
      description: string
    })
  }).isRequired,
}

function mapStateToProps({ selectedVideo }) {
  return {
    selectedVideo
  };
};

export default connect(mapStateToProps)(VideoPlayer);