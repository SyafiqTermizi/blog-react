import { combineReducers } from 'redux';

import { auth } from './auth/reducers';
import { posts } from './posts/reducers';
import { comments } from './comments/reducers';
import { pagination } from './pagination/reducers';

export default combineReducers({ auth, posts, comments, pagination });
