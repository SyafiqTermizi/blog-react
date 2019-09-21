import {
  LOADING,
  RECEIVE_POST,
  RECEIVE_ERROR,
  RECEIVE_SUCCESS,
  RESET_SUCCESS
} from './actionTypes';

const initialState = {
  posts: [],
  loading: false,
  errors: null,
  success: false
}

export const posts = (state=initialState, action) => {
  switch(action.type) {

    case LOADING:
      return {...state, loading: true};

    case RECEIVE_POST:
      return {...state, posts: action.posts, loading: false};
    
    case RECEIVE_ERROR:
      return {...state, errors: action.error, loading: false}

    case RECEIVE_SUCCESS:
      return {...initialState, success: true}

    case RESET_SUCCESS:
      return initialState

    default:
      return state;
  }
};
