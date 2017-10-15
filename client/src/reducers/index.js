import { combineReducers } from 'redux';
import authReducer from './authReducer';
import restaurantsReducer from './restaurantsReducer';
import goingReducer from './goingReducer';
import cancelReducer from './cancelReducer';

export default combineReducers({
  auth: authReducer,
  restaurants: restaurantsReducer,
  going: goingReducer,
  cancel: cancelReducer
});
