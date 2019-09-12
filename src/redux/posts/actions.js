import { FETCH_POST, RECEIVE_POST, RECEIVE_ERROR } from './actionTypes';

import { setCount } from '../pagination/actions';

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

export const getPosts = (limit, offset) => dispatch => {
  let url = limit ? `/posts/?limit=${limit}` : `/posts/?limit=5`;
  url = offset ? `${url}&offset=${offset}`: url;

  dispatch(fetchPost());

  return axios.get(url)
    .then(response => {
      dispatch(receivePost(response.data.results));
      dispatch(setCount(response.data.count));
    })
    .catch(error => dispatch(receiveError(error)))
};

export const createPost = (post, token) => () => {
  axios.defaults.headers.common = {'Authorization': "Token " + token};
  return axios.post('/posts/', post)
    .then(response => console.log(response.data))
    .catch(error => console.log(error))
};
