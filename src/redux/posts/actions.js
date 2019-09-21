import {
  LOADING,
  RECEIVE_POSTS,
  RECEIVE_FORM_ERROR,
  RECEIVE_FORM_SUCCESS,
  RESET_FORM_SUCCESS
} from './actionTypes';

import { setCount } from '../pagination/actions';

import axios from '../../axiosConfig';

const loading = () => ({ type: LOADING });

const receivePosts = posts => ({ type: RECEIVE_POSTS, posts });

const receiveFormErrors = errors => ({ type: RECEIVE_FORM_ERROR, errors });

const receiveFormSuccess = _ => ({ type: RECEIVE_FORM_SUCCESS });

export const resetFormSuccess = _ => ({ type: RESET_FORM_SUCCESS });

export const getPosts = (limit, offset) => dispatch => {
  let url = limit ? `/posts/?limit=${limit}` : `/posts/?limit=5`;
  url = offset ? `${url}&offset=${offset}`: url;

  dispatch(loading());
  return axios.get(url)
    .then(response => {
      dispatch(receivePosts(response.data.results));
      dispatch(setCount(response.data.count));
    })
};

export const createPost = (post, token) => dispatch => {
  axios.defaults.headers.common = {'Authorization': "Token " + token};

  dispatch(loading());
  return axios.post('/posts/', post)
    .then(_ => dispatch(receiveFormSuccess()))
    .catch(error => dispatch(receiveFormErrors(error.response.data)))
};
