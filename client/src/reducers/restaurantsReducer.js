import { FETCH_RESTAURANTS } from '../actions';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_RESTAURANTS:
      return action.payload;
    default:
      return state;
  }
}
