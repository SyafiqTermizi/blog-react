import { FETCH_COMMENTS, RECEIVE_COMMENTS, RECEIVE_ERROR } from './actionTypes';

const initialState = {
  comments: [],
  isFetching: false,
  error: null
};

export const comments = (state=initialState, action) => {
  switch(action.type) {

    case FETCH_COMMENTS:
      return {...state, isFetching: true};

    case RECEIVE_COMMENTS:
      return {...state, comments: action.comments, isFetching:false}

    case RECEIVE_ERROR:
      return {...state, error: action.error};

    default:
      return state;
  }
};
