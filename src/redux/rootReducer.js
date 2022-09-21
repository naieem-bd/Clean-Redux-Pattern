import { combineReducers } from 'redux';
import userReducer from './users/reducer';
import postsReducer from './posts/reducer';

const rootReducer = combineReducers({
  users: userReducer,
  posts: postsReducer,
});

export default rootReducer;
