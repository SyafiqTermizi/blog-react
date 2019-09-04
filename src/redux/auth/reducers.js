import {
  FETCH_TOKEN,
  RECEIVE_TOKEN,
  DELETE_TOKEN,
  RECEIVE_ERROR
} from './actionTypes';

const initialState = {
  username: '',
  email: '',
  token: '',
  isFetching: false,
  error: null
};

export const auth = (state=initialState, action) => {
  switch(action.type) {

    case FETCH_TOKEN:
      return {...initialState, isFetching: true};

    case RECEIVE_TOKEN:
      return {
        username: action.username,
        email: action.email,
        token: action.token,
        isFetching: false,
        error: null
      };

    case RECEIVE_ERROR:
      return {
        ...initialState,
        error: action.error,
        isFetching: false
      }

    case DELETE_TOKEN:
      return initialState;

    default:
      return state;
  }
};
