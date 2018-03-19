import React, { Component } from 'react';
import PropTypes from 'prop-types';

const VideoListEntry = ({ video, handleSelectedVideo }) => {
  return (
    <div className="videoListEntry">
      <div className="media">
        <div className="media-left media-middle">
          <img 
            className="media-object"
            src={video.snippet.thumbnails.default.url}
          />
        </div>
        <div className="media-body">
          <h4
            className="media-heading"
            onClick={() => handleSelectedVideo(video)}
          >
            {video.snippet.title}
          </h4>
          <p className="media-description">{video.snippet.description}</p>
        </div>
      </div>
    </div>
  )
}

VideoListEntry.propTypes = {
  video: PropTypes.object.isRequired,
  handleSelectedVideo: PropTypes.func.isRequired,
}

export default VideoListEntry;