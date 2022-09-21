import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchUsers from '../redux/users/thunk/fetchUsers';

const User = () => {
  const usersState = useSelector((state) => state.users);
  const { loading, error, users } = usersState;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers);
  }, [dispatch]);

  return (
    <>
      <h2>List of users</h2>
      {loading ? (
        <h2>Loading.....</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default User;
