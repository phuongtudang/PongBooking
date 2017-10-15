import { UPDATE_CANCEL } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case UPDATE_CANCEL:
      return action.payload.going;
    default:
      return state;
  }
}
