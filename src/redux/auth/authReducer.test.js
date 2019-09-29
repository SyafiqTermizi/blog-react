import {
  FETCH_TOKEN,
  RECEIVE_TOKEN,
  DELETE_TOKEN,
  RECEIVE_ERROR
} from './actionTypes';
import { auth } from './reducers';

describe('test auth reducer', () => {
  

  it('should return isFetching false', () => {
    const initialState = { isFetching: false };
    const action = { type: FETCH_TOKEN };
    const state = auth(initialState, action);
    expect(state.isFetching).toEqual(true)
  });


  it('it should return username, email, token and isFetching=false', () => {
    const initialState = {
      username: '',
      email: '',
      token: '',
      isFetching: false,
      error: null
    };
    const action = {
      type: RECEIVE_TOKEN,
      username: 'username',
      email: 'email',
      token: 'token',
      isFetching: false
    };
    const expectedState = {
      username: 'username',
      email: 'email',
      token: 'token',
      isFetching: false,
      error: null
    };
    const state = auth(initialState, action);
    expect(state).toEqual(expectedState);
  });


  it('should return error and isFetching=false', () => {
    const initialState = { error: null, isFetching: false };
    const action = { type: RECEIVE_ERROR, error: 'error' };
    const state = auth(initialState, action);
    expect(state.isFetching).toEqual(false);
    expect(state.error).toEqual(action.error);
  });


  it('should return empty username, email, token', () => {
    const initialState = { username: 'username', email: 'email', token: '123' };
    const action = { type: DELETE_TOKEN };
    const state = auth(initialState, action);
    const expectedState = { username: '', email: '', token: '' };
    expect(state).toEqual(expectedState);
  })
});

