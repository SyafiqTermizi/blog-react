import { FETCH_COMMENTS, RECEIVE_COMMENTS, RECEIVE_ERROR } from './actionTypes';
import { comments } from './reducers';

describe('test  comment reducer', () => {


  it('should return isFetching=true', () => {
    const initialState = { isFetching: false };
    const action = { type: FETCH_COMMENTS };
    const state = comments(initialState, action);
    expect(state.isFetching).toEqual(true);
  });


  it('should return new comment and isFetching=false', () => {
    const initialState = { comments: [], isFetching: false };
    const action = { type: RECEIVE_COMMENTS, comments: [{id: 1}, {id: 2}] };
    const state = comments(initialState, action);
    const expectedState = { comments: [{id: 1}, {id: 2}], isFetching: false }
    expect(state).toEqual(expectedState)
  });


  it('should return error', () => {
    const initialState = { error: null };
    const action = { type: RECEIVE_ERROR, error: 'error' };
    const state = comments(initialState, action);
    expect(state.error).toEqual(action.error);
  });
})