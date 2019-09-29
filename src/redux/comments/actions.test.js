import { FETCH_COMMENTS, RECEIVE_COMMENTS, RECEIVE_ERROR } from './actionTypes';
import { receiveComments, receiveError, fetchComments } from './actions';


describe('receiveComments', () => {
  it('should dispaction action with type RECEIVE_COMMENTS', () => {
    const comments = [{id: 1}, {id: 2}]
    const expectedAction = { type: RECEIVE_COMMENTS, comments };
    expect(receiveComments(comments)).toEqual(expectedAction);
  })
});


describe('receiveError', () => {
  it('should dispaction action with type RECEIVE_ERROR', () => {
    const error = 'error';
    const expectedAction = { type: RECEIVE_ERROR, error };
    expect(receiveError(error)).toEqual(expectedAction)
  })
});


describe('fetchComments', () => {
  it('should dispaction action with type FETCH_COMMENTS', () => {
    const expectedAction = { type: FETCH_COMMENTS };
    expect(fetchComments()).toEqual(expectedAction);
  })
});
