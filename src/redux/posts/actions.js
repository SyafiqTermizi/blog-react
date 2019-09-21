import {
  LOADING,
  RECEIVE_POSTS,
  RECEIVE_FORM_ERROR,
  RECEIVE_FORM_SUCCESS,
  RESET_FORM_SUCCESS
} from './actionTypes';

import axios from '../../axiosConfig';

const loading = () => ({ type: LOADING });

const receivePosts = (posts, count) => ({ type: RECEIVE_POSTS, posts, count });

const receiveFormErrors = errors => ({ type: RECEIVE_FORM_ERROR, errors });

const receiveFormSuccess = _ => ({ type: RECEIVE_FORM_SUCCESS });

export const resetFormSuccess = _ => ({ type: RESET_FORM_SUCCESS });

export const getPosts = (limit, offset=0) => dispatch => {
  const url = `/posts/?limit=${limit}&offset=${offset}`

  dispatch(loading());
  return axios.get(url)
    .then(({ data }) => (dispatch(receivePosts(data.results, data.count))))
};

export const createPost = (post, token) => dispatch => {
  axios.defaults.headers.common = {'Authorization': "Token " + token};

  dispatch(loading());
  return axios.post('/posts/', post)
    .then(_ => dispatch(receiveFormSuccess()))
    .catch(error => dispatch(receiveFormErrors(error.response.data)))
};
