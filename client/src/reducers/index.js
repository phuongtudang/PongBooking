import { combineReducers } from 'redux';
import authReducer from './authReducer';
import restaurantsReducer from './restaurantsReducer';

export default combineReducers({
  auth: authReducer,
  restaurants: restaurantsReducer
});
