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

const receiveError = error => ({
  type: RECEIVE_ERROR,
  error
});

export const deleteToken = () => ({
  type: DELETE_TOKEN
});

export const logIn = (username, password) => dispatch => {
  dispatch(fetchToken());
  return axios.post('/api/auth/', {username, password})
    .then(response => dispatch(receiveToken(response.data)))
    .catch(error => dispatch(receiveError(error)))
};
