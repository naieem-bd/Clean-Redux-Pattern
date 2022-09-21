import axios from 'axios';
import {
  fetchPostsRequest,
  fetchPostsSuccess,
  fetchPostsFailure,
} from '../actions';

const fetchPosts = async (dispatch) => {
  try {
    dispatch(fetchPostsRequest());
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts?_limit=5%22'
    );
    const posts = response.data;
    dispatch(fetchPostsSuccess(posts));
  } catch (error) {
    dispatch(fetchPostsFailure(error));
  }
};

export default fetchPosts;
