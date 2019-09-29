import {
  LOADING,
  RECEIVE_POSTS,
  RECEIVE_FORM_ERROR,
  RECEIVE_FORM_SUCCESS,
  RESET_FORM_SUCCESS
} from './actionTypes';
import { posts } from './reducers';


describe('test post reducer', () => {

  it('should return loading=true', () => {
    const initialState = { loading: false };
    const action = { type: LOADING };
    const state = posts(initialState, action);
    expect(state.loading).toEqual(true);
  });


  it('should return new posts', () => {
    const initialState = { posts: [], postCount: 0 };
    const action = {
      type: RECEIVE_POSTS,
      posts: [{id: 1}, {id: 2}, {id: 3}],
      count: 5
    };
    const expectedState = {
      posts: [{id: 1}, {id: 2}, {id: 3}],
      postCount: 5,
      loading: false
    };
    const state = posts(initialState, action);
    expect(state).toEqual(expectedState);
  });


  it('should return form error', () => {
    const initialState = { formErrors: null };
    const action = { type: RECEIVE_FORM_ERROR, errors: 'errors' };
    const state = posts(initialState, action);
    expect(state.formErrors).toEqual(action.errors);
  });


  it('should return form success', () => {
    const initialState = { formSuccess: false };
    const action = { type: RECEIVE_FORM_SUCCESS };
    const state = posts(initialState, action);
    expect(state.formSuccess).toEqual(true);
  });

  it('should reset form success', () => {
    const initialState = {};
    const action = { type: RESET_FORM_SUCCESS };
    const state = posts(initialState, action);
    expect(state.formSuccess).toEqual(false);
    expect(state.loading).toEqual(false);
  })

})