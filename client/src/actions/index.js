import axios from 'axios';

export const FETCH_USER = 'fetch_user';
export const FETCH_RESTAURANTS = 'fetch_restaurants';
export const UPDATE_GOING = 'update_going';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchRestaurants = city => async dispatch => {
  const res = await axios.get('/api/yelp', { params: { city } });

  dispatch({ type: FETCH_RESTAURANTS, payload: res.data });
};

export const updateGoing = restaurant => async dispatch => {
  console.log(restaurant);
  const res = await axios.post('/api/going', { params: { restaurant } });

  dispatch({ type: UPDATE_GOING, payload: res.data });
};
