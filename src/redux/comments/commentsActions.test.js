import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';
import axios from '../../axiosConfig';
import { FETCH_COMMENTS, RECEIVE_COMMENTS, RECEIVE_ERROR } from './actionTypes';
import {
  receiveComments,
  receiveError,
  fetchComments,
  getComments,
  createComment
} from './actions';


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


describe('getComments', () => {
  beforeEach(() => moxios.install(axios));
  afterEach(() => moxios.uninstall(axios));

  it('should dispatch actions with type FETCH_COMMENTS and RECEIVE_COMMENTS', () => {
    const response = {
      status: 200,
      response: [{id: 1}, {id: 2}, {id: 3}]
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(response);
    });

    const mockStore = configureMockStore([thunk]);
    const store = mockStore({ isFetching: false, comments: [] });

    const expectedActions = [
      { type: FETCH_COMMENTS },
      { type: RECEIVE_COMMENTS, comments: [{id: 1}, {id: 2}, {id: 3}] }
    ];

    return store.dispatch(getComments(true, 1)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
});
