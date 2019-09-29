import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';
import axios from '../../axiosConfig';

import {
  FETCH_TOKEN,
  RECEIVE_TOKEN,
  DELETE_TOKEN,
  RECEIVE_ERROR
} from './actionTypes';

import {
  fetchToken,
  receiveToken,
  deleteToken,
  receiveError,
  logIn
} from './actions';



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
  it('should dispatch action with type RECEIVE_ERROR', () => {
    const expectedAction = { type: RECEIVE_ERROR };
    expect(receiveError()).toEqual(expectedAction);
  })
});


describe('logIn', () => {

  beforeEach(() => moxios.install(axios));
  afterEach(() => moxios.uninstall(axios));


  it('should dispatch action with type FETCH_TOKEN and RECEIVE_TOKEN', () => {

    const response = {
      status: 200,
      response: {
        username: 'username',
        email: 'email',
        token: 'token'
      }
    };
  
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(response)
    });
  
    const mockStore = configureMockStore([thunk]);
    const store = mockStore({
      username: '',
      email: '',
      token: '',
      isFetching: false,
      error: null
    });

    const expectedActions = [
      { type: FETCH_TOKEN },
      { type: RECEIVE_TOKEN, username: 'username', email: 'email', token: 'token'}
    ];

    return store.dispatch(logIn()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
});
