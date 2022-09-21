import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchPosts from '../redux/posts/thunk/fetchPosts';

const Posts = () => {
  const postsState = useSelector((state) => state.posts);
  const { loading, posts, error } = postsState;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts);
  }, [dispatch]);

  return (
    <div>
      <h2>List of Posts</h2>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Posts;
