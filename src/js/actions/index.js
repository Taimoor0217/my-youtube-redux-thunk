import YOUTUBE_KEY from '../config/youtubekey';
import * as types from '../constants';

export function fetchVideosAttempt() {
  return {
    type: types.FETCH_VIDEOS_ATTEMPT,
  };
}

export function fetchVideosSuccess(videos) {
  return {
    type: types.FETCH_VIDEOS_SUCCESS,
    payload: videos
  };
}

export function fetchVideosFail(error) {
  return {
    type: types.FETCH_VIDEOS_FAIL,
    payload: error
  }
}

export function selectVideo(video) {
  return {
    type: types.SELECT_VIDEO,
    payload: video
  }
}

export function getVideos(query, initial) {
  const fixed = 'https://www.googleapis.com/youtube/v3/search';
  const url = `${fixed}?part=snippet&maxResults=5&q=${query}&key=${YOUTUBE_KEY}`;

  const thunk = async function thunk(dispatch) {
    try {
      dispatch(fetchVideosAttempt());
      const body = await fetch(url);
      const res = await body.json();
      dispatch(fetchVideosSuccess(res));
      if (initial) {
        dispatch(selectVideo(res.items[0]));
      }
    } catch (e) {
      dispatch(fetchVideosFail(e));
    }
  };

  thunk.meta = {
    debounce: {
      time: 1000,
      key: 'FETCH_VIDEOS'
    }
  };
  return thunk;
};
