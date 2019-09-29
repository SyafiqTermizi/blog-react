import {
  FETCH_TOKEN,
  RECEIVE_TOKEN,
  DELETE_TOKEN,
  RECEIVE_ERROR
} from './actionTypes';
import { fetchToken, receiveToken, deleteToken, receiveError } from './actions';


describe('fetchToken', () => {
  it('should dispatch action with type FETCH_TOKEN', () => {
    const expectedAction = { type: FETCH_TOKEN };
    expect(fetchToken()).toEqual(expectedAction);
  })
});


describe('receiveToken', () => {
  it('should dispatch action with type RECEIVE_TOKEN', () => {
    const username = 'username';
    const email = 'email';
    const token = 'token';
    const expectedAction = { type: RECEIVE_TOKEN, username, email, token };
    expect(receiveToken({username, email, token})).toEqual(expectedAction)
  })
});


describe('deleteToken', () => {
  it('should dispatch action with type DELETE_TOKEN', () => {
    const expectedAction = { type: DELETE_TOKEN };
    expect(deleteToken()).toEqual(expectedAction)
  })
});


describe('receiveError', () => {
  it('should dispatch action with type DELETE_TOKEN', () => {
    const expectedAction = { type: RECEIVE_ERROR };
    expect(receiveError()).toEqual(expectedAction);
  })
});
