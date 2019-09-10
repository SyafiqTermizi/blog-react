import { FETCH_POST, RECEIVE_POST, RECEIVE_ERROR } from './actionTypes';

const initialState = {
  posts: [],
  isFetching: false,
  error: null
}

export const posts = (state=initialState, action) => {
  switch(action.type) {

    case FETCH_POST:
      return {...state, isFetching: true};

    case RECEIVE_POST:
      return {...state, posts: action.posts, isFetching: false};
    
    case RECEIVE_ERROR:
      return {...state, error: action.error}

    default:
      return state;
  }
};