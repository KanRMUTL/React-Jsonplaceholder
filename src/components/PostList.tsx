import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { Button, Grid } from '@material-ui/core';
import Post from './hooks/usePost';
import CardWithContent from './CardWithContent';
import styled from 'styled-components';
interface Props {
  posts: Post[];
}

interface ActionProps {
  postId: number;
}

const GridItem = styled(Grid)`
  padding: 10px 10px;
`;

const GridContainer = styled(Grid)`
  padding-top: 5px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
`;

function PostList({ posts }: Props) {
  const { url } = useRouteMatch();
  const Action = ({ postId }: ActionProps) => (
    <Button component={Link} to={`${url}/${postId}`} color="primary">
      View
    </Button>
  );

  return (
    <GridContainer container>
      {posts.map((p) => {
        return (
          <GridItem item xs={12} sm={6} md={4} key={p.id}>
            <CardWithContent
              avatarChar={p.id}
              headerTitle={p.title}
              content={p.body}
              Action={<Action postId={p.id} />}
            />
          </GridItem>
        );
      })}
    </GridContainer>
  );
}

export default PostList;
