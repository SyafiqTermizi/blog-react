import { FETCH_COMMENTS, RECEIVE_COMMENTS, RECEIVE_ERROR } from './actionTypes';

import axios from '../../axiosConfig';

const fetchComments = () => ({
  type: FETCH_COMMENTS
});

const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

const receiveError = error => ({
  type: RECEIVE_ERROR,
  error
});

export const getComments = (isUserComment, id) => dispatch => {
  dispatch(fetchComments());
  const url = isUserComment ? `/comments/?user=${id}` : `/comments/?post=${id}`;
  return axios.get(url)
    .then(response => dispatch(receiveComments(response.data)))
    .catch(error => dispatch(receiveError(error)))
};

export const createComment = (isUserComment, id, token, comment) => dispatch => {
  axios.defaults.headers.common = {'Authorization': "Token " + token};
  const url = isUserComment ? `/comments/?user=${id}` : `/comments/?post=${id}`;
  axios.post(url, comment)
    .then(_ => dispatch(getComments(isUserComment, id)))
    .catch(error => console.log(error))
};
