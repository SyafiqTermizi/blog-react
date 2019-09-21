import {
  LOADING,
  RECEIVE_POST,
  RECEIVE_ERROR,
  RECEIVE_SUCCESS,
  RESET_SUCCESS
} from './actionTypes';

import { setCount } from '../pagination/actions';

import axios from '../../axiosConfig';

const loading = () => ({
  type: LOADING
});

const receivePost = posts => ({
  type: RECEIVE_POST,
  posts
});

const receiveError = error => ({
  type: RECEIVE_ERROR,
  error
});

const receiveSuccess = _ => ({
  type: RECEIVE_SUCCESS
});

export const resetSuccess = _ => ({
  type: RESET_SUCCESS
});

export const getPosts = (limit, offset) => dispatch => {
  let url = limit ? `/posts/?limit=${limit}` : `/posts/?limit=5`;
  url = offset ? `${url}&offset=${offset}`: url;

  dispatch(loading());
  return axios.get(url)
    .then(response => {
      dispatch(receivePost(response.data.results));
      dispatch(setCount(response.data.count));
    })
};

export const createPost = (post, token) => dispatch => {
  axios.defaults.headers.common = {'Authorization': "Token " + token};

  dispatch(loading());
  return axios.post('/posts/', post)
    .then(_ => dispatch(receiveSuccess()))
    .catch(error => dispatch(receiveError(error.response.data)))
};
