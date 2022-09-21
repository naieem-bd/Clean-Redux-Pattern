import React from 'react';
import { Provider } from 'react-redux';
import Posts from './components/Posts';
import User from './components/User';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <User />
      <hr />
      <Posts />
    </Provider>
  );
};

export default App;
