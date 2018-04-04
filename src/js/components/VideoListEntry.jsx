import React, { Component } from 'react';
import { shape, func, string } from 'prop-types';

const VideoListEntry = ({ video, handleSelectedVideo }) => (
    <div className="videoListEntry">
      <div className="media">
        <div className="media-left media-middle">
          <img 
            className="media-object"
            alt="thumbnails"
            src={video.snippet.thumbnails.default.url}
          />
        </div>
        <div className="media-body">
          <button
            className="media-heading"
            onClick={() => handleSelectedVideo(video)}
          >
            {video.snippet.title}
          </button>
          <p className="media-description">{video.snippet.description}</p>
        </div>
      </div>
    </div>
  )

VideoListEntry.propTypes = {
  video: shape({
    snippet: shape({
      title: string.isRequired,
      description: string.isRequired,
      thumbnails: shape({
        default: shape({
          url: string.isRequired,
        })
      })
    }).isRequired,
  }).isRequired,
  handleSelectedVideo: func.isRequired,
}

export default VideoListEntry;