import { combineReducers } from 'redux';
import videoListReducer from './videoListReducer';
import selectedVideoReducer from './selectedVideoReducer';

const rootReducer = combineReducers({
  videoList: videoListReducer,
  selectedVideo: selectedVideoReducer
})

export default rootReducer;