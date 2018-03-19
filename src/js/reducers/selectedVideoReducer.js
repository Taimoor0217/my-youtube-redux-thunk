import { SELECT_VIDEO } from '../constants';

export default function(state={}, action) {
  switch(action.payload) {
    case SELECT_VIDEO:
      return action.payload;
  }
  return state;
}