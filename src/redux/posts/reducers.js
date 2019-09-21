import {
  LOADING,
  RECEIVE_POSTS,
  RECEIVE_FORM_ERROR,
  RECEIVE_FORM_SUCCESS,
  RESET_FORM_SUCCESS
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

    case RECEIVE_POSTS:
      return {...state, posts: action.posts, loading: false};
    
    case RECEIVE_FORM_ERROR:
      return {...state, errors: action.errors, loading: false}

    case RECEIVE_FORM_SUCCESS:
      return {...initialState, success: true}

    case RESET_FORM_SUCCESS:
      return {...state, errors: null, success: false}

    default:
      return state;
  }
};
