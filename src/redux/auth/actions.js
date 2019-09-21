import {
  FETCH_TOKEN,
  RECEIVE_TOKEN,
  DELETE_TOKEN,
  RECEIVE_ERROR
} from './actionTypes';

import axios from '../../axiosConfig';


const fetchToken = () => ({
  type: FETCH_TOKEN
});

const receiveToken = ({ username, email, token }) => ({
  type: RECEIVE_TOKEN,
  username,
  email,
  token
});

// field error
// - error.response.data.[fieldName] : [arr of error]
// 
// non field error
// - error.response.data.non_field_errors: [array of non field error]

const receiveError = error => ({
  type: RECEIVE_ERROR,
  error
});

export const deleteToken = () => ({
  type: DELETE_TOKEN
});

export const logIn = (username, password) => dispatch => {
  dispatch(fetchToken());
  return axios.post('/auth/', {username, password})
    .then(response => dispatch(receiveToken(response.data)))
    .catch(error => dispatch(receiveError(error.response.data)))
};
