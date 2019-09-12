import { SET_LIMIT, SET_COUNT } from './actionTypes';

// per page
export const setLimit = limit => ({
  type: SET_LIMIT,
  limit
});

// data count
export const setCount = count => ({
  type: SET_COUNT,
  count
});
