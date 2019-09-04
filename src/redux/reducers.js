import { combineReducers } from 'redux';

import { auth } from './auth/reducers';
import { posts } from './posts/reducers';

export default combineReducers({ auth, posts });
