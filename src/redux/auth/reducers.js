import {
  FETCH_TOKEN,
  RECEIVE_TOKEN,
  DELETE_TOKEN,
  RECEIVE_ERROR
} from './actionTypes';

const initialState = {
  username: 'admin',
  email: 'kambing',
  token: '49c7973a28279aa4f1a6c2cd5e04ce72e05d54e8',
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
      return {};

    default:
      return state;
  }
};
