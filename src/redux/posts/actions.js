import { FETCH_POST, RECEIVE_POST, RECEIVE_ERROR } from './actionTypes';

import axios from '../../axiosConfig';

const fetchPost = () => ({
  type: FETCH_POST
});

const receivePost = posts => ({
  type: RECEIVE_POST,
  posts
});

const receiveError = error => ({
  type: RECEIVE_ERROR,
  error
});

export const getPosts = () => dispatch => {
  dispatch(fetchPost())
  return axios.get('/posts/')
    .then(response => dispatch(receivePost(response.data)))
    .catch(error => dispatch(receiveError(error)))
};