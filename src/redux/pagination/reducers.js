import { SET_LIMIT, SET_OFFSET, SET_COUNT } from './actionTypes';

const initialState = {
  limit: 5,
  offset: 0,
  count: 0
}

export const pagination = (state=initialState, action) => {
  switch(action.type) {

    case SET_LIMIT:
      return {...state, limit: action.limit}

    case SET_OFFSET:
      return {...state, offset: action.offset}
    
    case SET_COUNT:
      return {...state, count: action.count}

    default:
      return state
  }
};
