import React from 'react';
import { usePost } from './hooks/usePost';
import PostList from './PostList';

function Post() {
  const posts = usePost();

  return <PostList posts={posts} />;
}

export default Post;
