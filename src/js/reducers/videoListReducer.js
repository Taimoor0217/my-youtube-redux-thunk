import {
  FETCH_VIDEOS_ATTEMPT,
  FETCH_VIDEOS_SUCCESS,
  FETCH_VIDEO_FAIL
} from '../constants';

const initial = {
  isLoading: false,
  error: null,
  videos: []
}

export default function (state = initial, action) {
  let videos;
  switch (action.type) {
    case FETCH_VIDEOS_ATTEMPT:
      return { ...state, isLoading: true };
    case FETCH_VIDEOS_SUCCESS:
      videos = action.payload.items;
      return { ...state, videos, isLoading: false, error: null };
    case FETCH_VIDEO_FAIL:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
}