import {
  LOADING,
  RECEIVE_POSTS,
  RECEIVE_FORM_ERROR,
  RECEIVE_FORM_SUCCESS,
  RESET_FORM_SUCCESS
} from './actionTypes';

const initialState = {
  loading: false,

  posts: [],
  postCount: 0,
  postLimit: 5,

  formErrors: null,
  formSuccess: false
}

export const posts = (state=initialState, action) => {
  switch(action.type) {

    case LOADING:
      return {...state, loading: true};

    case RECEIVE_POSTS:
      return {
        ...state,
        posts: action.posts,
        postCount: action.count,
        loading: false
      };
    
    case RECEIVE_FORM_ERROR:
      return {...state, formErrors: action.errors, loading: false}

    case RECEIVE_FORM_SUCCESS:
      return {...initialState, formSuccess: true, loading: false}

    case RESET_FORM_SUCCESS:
      return {...state, formErrors: null, formSuccess: false, loading: false}

    default:
      return state;
  }
};
