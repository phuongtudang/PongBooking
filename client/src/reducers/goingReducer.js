import { UPDATE_GOING } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case UPDATE_GOING:
      return action.payload.going;
    default:
      return state;
  }
}
