import React from 'react';
import { usePost } from './hooks/usePost';
import { Box } from '@material-ui/core';
import PostList from './PostList';

function Post() {
  const posts = usePost();

  return (
    <Box>
      <PostList posts={posts} />
    </Box>
  );
}

export default Post;
