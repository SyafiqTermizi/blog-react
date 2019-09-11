import { SET_LIMIT, SET_OFFSET, SET_COUNT } from './actionTypes';

// per page
export const setLimit = limit => ({
  type: SET_LIMIT,
  limit
});

// next or prev
export const setOffset = offset => ({
  type: SET_OFFSET,
  offset
});

// data count
export const setCount = count => ({
  type: SET_COUNT,
  count
});
