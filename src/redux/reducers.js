import { combineReducers } from 'redux';

import { auth } from './auth/reducers';
import { posts } from './posts/reducers';
import { comments } from './comments/reducers';

export default combineReducers({ auth, posts, comments });
