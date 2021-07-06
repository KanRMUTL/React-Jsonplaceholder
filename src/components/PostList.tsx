import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { Button, Grid } from '@material-ui/core';
import Post from './hooks/usePost';
import CardWithContent from './CardWithContent';
interface Props {
  posts: Post[];
}

interface ActionProps {
  postId: number;
}

function PostList({ posts }: Props) {
  const { url } = useRouteMatch();
  const Action = ({ postId }: ActionProps) => (
    <Button component={Link} to={`${url}/${postId}`} color="primary">
      View
    </Button>
  );

  return (
    <Grid container spacing={3}>
      {posts.map((p) => {
        return (
          <Grid item xs={12} sm={6} md={4}>
            <CardWithContent
              avatarChar={p.id}
              headerTitle={p.title}
              content={p.body}
              Action={<Action postId={p.id} />}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default PostList;
