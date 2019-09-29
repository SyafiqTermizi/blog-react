import {
  LOADING,
  RECEIVE_POSTS,
  RECEIVE_FORM_ERROR,
  RECEIVE_FORM_SUCCESS,
  RESET_FORM_SUCCESS
} from './actionTypes';

import {
  loading,
  receivePosts,
  receiveFormErrors,
  receiveFormSuccess,
  resetFormSuccess
} from './actions';


describe('loading', () => {
  it('should dispacth action with type LOADING', () => {
    const expectedAction = { type: LOADING };
    expect(loading()).toEqual(expectedAction);
  })
});


describe('receivePosts', () => {
  it('should dispacth action with type RECEIVE_POSTS', () => {
    const count = 10;
    const posts = [{id: 1, title: 'test1'}, {id:2, title: 'test2'}];
    const expectedAction = { type: RECEIVE_POSTS, count, posts };
    expect(receivePosts(posts, count)).toEqual(expectedAction);
  })
});


describe('receiveFormErrors', () => {
  it('should dispacth action with type RECEIVE_FORM_ERROR', () => {
    const errors = [{id: 1}, {id: 2}, {id: 3}];
    const expectedAction = { type: RECEIVE_FORM_ERROR, errors };
    expect(receiveFormErrors(errors)).toEqual(expectedAction)
  })
});


describe('receiveFormSuccess', () => {
  it('should dispacth action with type RECEIVE_FORM_SUCCESS', () => {
    const expectedAction = { type: RECEIVE_FORM_SUCCESS };
    expect(receiveFormSuccess()).toEqual(expectedAction)
  })
});


describe('resetFormSuccess', () => {
  it('should dispacth action with type RESET_FORM_SUCCESS', () => {
    const expectedAction = { type: RESET_FORM_SUCCESS };
    expect(resetFormSuccess()).toEqual(expectedAction)
  })
});
