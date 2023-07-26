import P from 'prop-types';
import { PostsContext } from './context';
import { useReducer } from 'react';
import { reducer } from './reducer';
import { data } from './data';

export const PostsProvider = ({ children }) => {
  const [postsState, postsDispatch] = useReducer(reducer, data);

  return (
    <PostsContext.Provider value={{ postsState, postsDispatch }}>
      {children}
    </PostsContext.Provider>
  );
};

PostsProvider.propTypes = {
  children: P.node.isRequired,
};
