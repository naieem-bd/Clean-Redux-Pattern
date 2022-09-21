import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
} from './actionTypes';
import initialState from './initialState';

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_POSTS_SUCCESS:
      return {
        loading: false,
        posts: action.payload,
        error: '',
      };

    case FETCH_POSTS_FAILURE:
      return {
        loading: false,
        posts: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default postsReducer;
