import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';
import axios from '../../axiosConfig';
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
  resetFormSuccess,
  getPosts,
  createPost
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


describe('getPosts', () => {
  beforeEach(() => moxios.install(axios));
  afterEach(() => moxios.uninstall(axios));

  it('should dispacth action with type LOADING and RECEIVE_POSTS', () => {
    // mock api call
    const response = {
      status: 200,
      response: {
        results: [],
        count: 3
      }
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(response);
    });

    // mock store
    const mockStore = configureMockStore([thunk]);
    const store = mockStore({ loading: false, posts: [] });

    const expectedActions = [
      { type: LOADING },
      { type: RECEIVE_POSTS, posts: [],  count: 3}
    ]

    return store.dispatch(getPosts(5)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
});


describe('createPost', () => {
  beforeEach(() => moxios.install(axios));
  afterEach(() => moxios.uninstall(axios));

  it('should dispacth action with type LOADING and RECEIVE_FORM_SUCCESS', () => {

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({status: 201});
    });

    const mockStore = configureMockStore([thunk]);
    const store = mockStore({ loading: false, formSuccess: false });

    const expectedActions = [
      {"type": "LOADING"},
      {"type": "RECEIVE_FORM_SUCCESS"}
    ]

    const post = {title: 'test', body: 'testing'};
    const token = '1234';
    return store.dispatch(createPost(post, token)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    })
  })
});
